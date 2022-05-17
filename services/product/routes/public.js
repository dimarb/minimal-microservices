import  express from 'express';
import  PublicController from '../controllers/public_controller.js'

let router = express.Router();

router.get('/healthcheck', PublicController.healthCheck);

export default router;
