import express from 'express';
import UserController from "../controllers/user_controller.js";


let router = express.Router();

router.post('/login', UserController.login);

export default router;
