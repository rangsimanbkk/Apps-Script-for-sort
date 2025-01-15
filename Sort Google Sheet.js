function SortonFormSubmit(e) {
    const sheetId = "Your Sheet ID"; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  
    // Sort the range (excluding header)
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) { // Only sort if there is more than just the header
      Utilities.sleep(30000); //Wait 30s before sort
      //sheet.getRange(row, column, numRows, numColumns).sort(columnPositionWantToSort);
      sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).sort(1);
    }
  }
