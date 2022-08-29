import { GoogleSpreadsheet } from 'google-spreadsheet'
import google_cred from '../config/google_sheets_key.json'

const controller = {};

controller.getSheetData = async (req, res) => {
  try {
    console.log("Test")
    const doc = new GoogleSpreadsheet(google_cred.sheet_id);
    await doc.useServiceAccountAuth({
        client_email: google_cred.client_email,
        private_key: google_cred.private_key,
      });
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    // const rows = await sheet.getRows()
    let addRow = 0
    if(addRow==1){
        await sheet.addRow(google_cred.data);
    }
    let message = 'Controller working'
    return res.status(200).json({message});
  } catch (e) {
    console.log(e);
  }
};

module.exports = controller;
