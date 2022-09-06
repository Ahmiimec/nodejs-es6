import express from 'express'
import healthCheck from './healthCheck.js'

const router = express.Router();

router.use('/healthCheck', healthCheck);
  
export default router;
