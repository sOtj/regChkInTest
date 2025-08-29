//  15:50 Thu 28 Aug 2025
//  attached to GoogleSheet "P-HODchkIn", Trigger - Head/ From spreadsheet - On form submit/ onFormSubmit
//  OK - timestamp to "attendee" sheet for designated column
//  NG - accept multiple entry - timestamp overwritten
//  -------------------------------------------------------------
function onFormSubmit(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var attendeeSheet = ss.getSheetByName("attendees");
  var sheetName = e.range.getSheet().getName(); //Form responses 2, etc. where the newly submitted data stored
Logger.log("sheetName: " + sheetName); 
  
  // Get the submitted ID.
  var newResponse = e.namedValues;
  var registrationID = newResponse['Your registration ID'][0].toString().trim();

    var checkinColumn;  // check the sheet name carefully
  if (sheetName.includes("Form responses 1")) {
    // This is a placeholder, you'll need to set the column based on your forms
    // In case of "Form responses 10", it comes HERE - setting 10, 11, 12 after 1 would be NG
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
  } else if (sheetName.includes("Form responses X")) {
    checkinColumn = 26;   // Z
  } else {
    return;
  }
  // Find the attendee's row and update the check-in column.
  var attendeeData = attendeeSheet.getDataRange().getValues();
  for (var i = 1; i < attendeeData.length; i++) {
Logger.log("i: " + i + "/ attendeeData[i][14]: " + attendeeData[i][14] + "/ registrationID: " + registrationID); 
    if (attendeeData[i][14].toString().trim() == registrationID) {
Logger.log("i: " + i + "/ checkinColumn: " + checkinColumn); 
      attendeeSheet.getRange(i + 1, checkinColumn).setValue(new Date());
      break;
    }
  }
}
