import express from 'express'
import controller from '../controller/healthCheck'

const router = express.Router();

  router.route('/')
    .get(controller.healthCheck)
  
module.exports = router;
