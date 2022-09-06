import express from 'express'
import controller from '../controller/healthCheck.js'

const router = express.Router();

  router.route('/')
    .get(controller.healthCheck)
  
export default router;
