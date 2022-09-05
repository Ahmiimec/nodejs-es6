import { GoogleSpreadsheet } from 'google-spreadsheet'
import google_cred from '../config/google_sheets_key.json'
import moment from 'moment'

const controller = {};

controller.getSheetData = async (req, res) => {
  try {
    const doc = new GoogleSpreadsheet(req.body.sheetId);
    await doc.useServiceAccountAuth({
        client_email: google_cred.client_email,
        private_key: google_cred.private_key,
      });
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    // const rows = await sheet.getRows()
    let addRow = 1
    if(addRow==1){
        let data = google_cred.data
        data['Created At']=moment().format()
        await sheet.addRow(data);
        return res.status(200).json({message:"Success"});
    }
    
  } catch (e) {
    console.log(e);
  }
};

module.exports = controller;
