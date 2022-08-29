import express from 'express'
import healthCheck from './healthCheck'
import googleSheets from './googleSheets'

const router = express.Router();

router.use('/healthCheck', healthCheck);

router.use('/googleSheets', googleSheets);

module.exports = router;
