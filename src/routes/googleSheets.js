import express from 'express'
import controller from '../controller/googleSheets'

const router = express.Router();

  router.route('/getSheet')
    .post(controller.getSheetData)
  
module.exports = router;
