/**
 * @param {GoogleAppsScript.Events.FormsOnFormSubmit} e The form submit event.
 */
function onFormSubmit(e) {
  
  // Replace with the ID of your Google Form
  const FORM_ID = '1FAIpQLSeuEU7vXW7QA6hfxh6zDD5orGfGap5TMF4T2qBcs5dfDRqtmA'; 
  
  // Replace with the ID of your Google Sheet
  const SPREADSHEET_ID = '17fDz2Xdr_6ZXRTVJ6mjxDLGf5TJXg0WRyhzpBYr-kV0';
  
  // Replace with the URL of your GitHub page
  const REDIRECT_URL = 'https://sotj.github.io/regChkInTest/chkInConf.html';
  
  // --- This is the key change ---
  // We get the form and the last response directly, bypassing the buggy event object.
  const form = FormApp.openById(FORM_ID);
  const responses = form.getResponses();
  const lastResponse = responses[responses.length - 1];
  
  // Now we can get the named values reliably
  const namedValues = lastResponse.getNamedValues();
  const registrationID = namedValues['Your registration ID'][0].toString().trim();
 


  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var attendeeSheet = ss.getSheetByName("attendees");

  // Get the name of the sheet where the data was submitted
  //var sheetName = e.range.getSheet().getName();

  //var newResponse = e.namedValues;
  //var registrationID = newResponse['Your registration ID'][0].toString().trim();

  var checkinColumn;
  if (sheetName.includes("Form responses 1")) {
    // This is a placeholder, you'll need to set the column based on your forms
    checkinColumn = 18;   //column R 
  } else if (sheetName.includes("Form responses 2")) {
    checkinColumn = 19;   // S
  } else if (sheetName.includes("Form responses 3")) {
    checkinColumn = 20;   // T
  } else if (sheetName.includes("Form responses 4")) {
    checkinColumn = 21;   // U
  } else if (sheetName.includes("Form responses 5")) {
    checkinColumn = 22;   // V
  } else if (sheetName.includes("Form responses 6")) {
    checkinColumn = 23;   // W
  } else if (sheetName.includes("Form responses 7")) {
    checkinColumn = 24;   // X
  } else if (sheetName.includes("Form responses 8")) {
    checkinColumn = 25;   // Y
  } else if (sheetName.includes("Form responses 9")) {
    checkinColumn = 26;   // Z
  } else {
    return;
  }

  var attendeeData = attendeeSheet.getDataRange().getValues();
  var isDuplicate = false;

  for (var i = 1; i < attendeeData.length; i++) {
    if (attendeeData[i][14].toString().trim() === registrationID) {       //column 14,O, ID
      var checkinCell = attendeeSheet.getRange(i + 1, checkinColumn);
      if (checkinCell.getValue() !== '') {
        isDuplicate=true;
      } else {
        checkinCell.setValue(new Date());
      }
      break;
    }
  }

// At the end of your onFormSubmit function, after all your processing:
//var redirectUrl = 'https://sotj.github.io/regChkInTest/chkInConf.html';
//var messageParam = isDuplicate ? '?status=duplicate' : '?status=success';

// Create a simple HTML page that performs the redirect
//var htmlOutput = HtmlService.createHtmlOutput(
//  '<script>' +
//  '  window.top.location.href = "' + redirectUrl + messageParam + '";' +
//  '</script>'
//);

// Return the HTML to the browser
//return htmlOutput;


// After all the processing, redirect to the custom page with a message
//      if (isDuplicate) {
// Redirect with a "duplicate" message
//        return HtmlService.createHtmlOutput('<script>window.top.location.href = "' + CONFIRMATION_URL + '?status=duplicate";</script>');
//      } else {
// Redirect with a "success" message
//       return HtmlService.createHtmlOutput('<script>window.top.location.href = "' + CONFIRMATION_URL + '?status=success";</script>');
//      }


  // After your processing, set the confirmation message to a redirect
  
  const redirectParams = isDuplicate ? '?status=duplicate' : '?status=success';
  const finalRedirectUrl = 'https://sotj.github.io/regChkInTest/chkInConf.html' + redirectParams;
  
  // The magic happens here: a meta refresh tag that redirects immediately
  const redirectHtml = '<meta http-equiv="refresh" content="0; url=' + finalRedirectUrl + '" />';
  
  // Set the confirmation message to the redirect HTML
  Logger.log('e: ' + e + ', redirectHtml:'+ redirectHtml);
  form.setConfirmationMessage(redirectHtml);

  //return ContentService.createTextOutput('Success');
}
