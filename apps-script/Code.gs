/**
 * DEON Tapes — contact form backend (Google Apps Script)
 * ------------------------------------------------------
 * Handles all four enquiry types from contact.html:
 *   samplequote · job · supply · general
 *
 * Features
 *   - Logs every submission to a per-type tab in the bound spreadsheet
 *   - Accepts a base64 file (CV for `job`, catalogue for `supply`),
 *     saves it to Drive and attaches it to the notification email
 *   - Unique subject per message so Gmail does not thread submissions
 *
 * DEPLOY
 *   Extensions > Apps Script, paste this file, then
 *   Deploy > New deployment > Web app
 *     Execute as:        Me
 *     Who has access:    Anyone
 *   Copy the /exec URL into FORM_URL in contact.html.
 *   Re-deploy (New deployment, not Manage) after every code change,
 *   otherwise the old version keeps serving.
 */

// ---------------------------------------------------------------------------
// CONFIG — edit these, then re-deploy. Recipients are intentionally defined
// here and NOT taken from the browser: the endpoint is public, so trusting a
// client-supplied address list would let anyone use it to send mail.
// ---------------------------------------------------------------------------
var RECIPIENTS = {
  samplequote: ['smeetkataria7@gmail.com', 'smeet.kataria@gmail.com'],
  job:         ['smeetkataria7@gmail.com', 'smeet.kataria@gmail.com'],
  supply:      ['smeetkataria7@gmail.com', 'palakshweta08@gmail.com'],
  general:     ['smeetkataria7@gmail.com', 'smeet.kataria@gmail.com']
};

// Drive folder for uploaded CVs / catalogues. Leave '' to auto-create
// a folder called "DEON form uploads" in My Drive.
var UPLOAD_FOLDER_ID = '';

var LABEL = {
  samplequote: 'Sample / Quote request',
  job:         'Job application',
  supply:      'Supply enquiry',
  general:     'General enquiry'
};

// Which fields to record, in order, per type.
var FIELDS = {
  job: ['name', 'phone', 'email', 'designation', 'qualification', 'company',
        'currentCTC', 'expectedCTC', 'currentState', 'preferredState',
        'noticePeriod', 'message'],
  other: ['first', 'last', 'company', 'country', 'email', 'phone', 'sku', 'message']
};

// ---------------------------------------------------------------------------

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var type = String(data.type || 'general');
    if (!RECIPIENTS[type]) type = 'general';

    var stamp = new Date();
    var fileInfo = data.file ? saveFile_(data.file, type, stamp) : null;

    logRow_(type, data, stamp, fileInfo);
    sendMail_(type, data, stamp, fileInfo);

    return json_({ ok: true });
  } catch (err) {
    // Surface the failure in the execution log rather than failing silently.
    console.error(err);
    try { notifyFailure_(err, e); } catch (ignored) {}
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, status: 'DEON form endpoint is live' });
}

// --- storage ---------------------------------------------------------------

function saveFile_(file, type, stamp) {
  if (!file || !file.data) return null;

  var bytes = Utilities.base64Decode(file.data);
  var safeName = (file.name || 'upload').replace(/[\\/:*?"<>|]/g, '_');
  var blob = Utilities.newBlob(bytes,
    file.mimeType || 'application/octet-stream',
    Utilities.formatDate(stamp, Session.getScriptTimeZone(), 'yyyy-MM-dd_HHmmss') + '_' + safeName);

  var saved = uploadFolder_().createFile(blob);
  // Anyone with the link can open it — so the recipient can read the CV
  // without needing to be granted access individually.
  saved.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  return { url: saved.getUrl(), name: saved.getName(), blob: blob };
}

function uploadFolder_() {
  if (UPLOAD_FOLDER_ID) return DriveApp.getFolderById(UPLOAD_FOLDER_ID);
  var found = DriveApp.getFoldersByName('DEON form uploads');
  return found.hasNext() ? found.next() : DriveApp.createFolder('DEON form uploads');
}

function logRow_(type, data, stamp, fileInfo) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return; // script not bound to a sheet — email still goes out
  var sheet = ss.getSheetByName(type) || ss.insertSheet(type);
  var keys = (type === 'job') ? FIELDS.job : FIELDS.other;

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp'].concat(keys, ['File']));
    sheet.getRange(1, 1, 1, keys.length + 2).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  var row = [stamp].concat(keys.map(function (k) { return data[k] || ''; }));
  row.push(fileInfo ? fileInfo.url : '');
  sheet.appendRow(row);
}

// --- notification ----------------------------------------------------------

function sendMail_(type, data, stamp, fileInfo) {
  var keys = (type === 'job') ? FIELDS.job : FIELDS.other;
  var who = data.name || ((data.first || '') + ' ' + (data.last || '')).trim() || 'Website visitor';

  var rows = keys.map(function (k) {
    var v = data[k];
    if (!v) return '';
    return '<tr>' +
      '<td style="padding:6px 14px 6px 0;color:#777;white-space:nowrap;vertical-align:top">' + titleCase_(k) + '</td>' +
      '<td style="padding:6px 0;color:#111">' + escape_(v).replace(/\n/g, '<br>') + '</td></tr>';
  }).join('');

  if (fileInfo) {
    rows += '<tr><td style="padding:6px 14px 6px 0;color:#777">Attachment</td>' +
            '<td style="padding:6px 0"><a href="' + fileInfo.url + '">' + escape_(fileInfo.name) + '</a></td></tr>';
  }

  var html =
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px">' +
      '<p style="margin:0 0 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#CC0000">' +
        'DEON website — ' + LABEL[type] + '</p>' +
      '<h2 style="margin:0 0 16px;font-size:20px;color:#111">' + escape_(who) + '</h2>' +
      '<table style="border-collapse:collapse;font-size:14px">' + rows + '</table>' +
      '<p style="margin:20px 0 0;font-size:12px;color:#999">Received ' +
        Utilities.formatDate(stamp, Session.getScriptTimeZone(), 'd MMM yyyy, HH:mm') + '</p>' +
    '</div>';

  var options = {
    htmlBody: html,
    name: 'DEON Website'
  };
  // Reply goes straight back to the person who filled the form.
  var replyTo = data.email;
  if (replyTo && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(replyTo)) options.replyTo = replyTo;
  if (fileInfo) options.attachments = [fileInfo.blob];

  // The timestamp keeps Gmail from collapsing separate submissions into one thread.
  var subject = LABEL[type] + ' — ' + who + ' — ' +
    Utilities.formatDate(stamp, Session.getScriptTimeZone(), 'dd MMM HH:mm:ss');

  MailApp.sendEmail(RECIPIENTS[type].join(','), subject, plainText_(data, keys, fileInfo), options);
}

function notifyFailure_(err, e) {
  MailApp.sendEmail(RECIPIENTS.general[0],
    'DEON form ERROR — ' + new Date().toISOString(),
    'The form endpoint threw an error.\n\n' + err + '\n\nRaw payload:\n' +
    (e && e.postData ? e.postData.contents : '(none)'));
}

// --- helpers ---------------------------------------------------------------

function plainText_(data, keys, fileInfo) {
  var lines = keys.map(function (k) {
    return data[k] ? titleCase_(k) + ': ' + data[k] : '';
  }).filter(String);
  if (fileInfo) lines.push('Attachment: ' + fileInfo.url);
  return lines.join('\n');
}

function titleCase_(k) {
  return k.replace(/([A-Z])/g, ' $1')
          .replace(/^./, function (c) { return c.toUpperCase(); });
}

function escape_(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Run once from the editor to grant Drive/Gmail permissions and smoke-test. */
function testSubmission() {
  doPost({ postData: { contents: JSON.stringify({
    type: 'job',
    name: 'Test Applicant',
    phone: '9999999999',
    email: 'test@example.com',
    designation: 'Operator',
    message: 'Applying for: Production Supervisor'
  })}});
}
