import express from 'express'
import healthCheck from './healthCheck'

const router = express.Router();

router.use('/healthCheck', healthCheck);
  
module.exports = router;
