import  express from 'express';

import  UserController from '../controllers/user_controller.js'

let router = express.Router();

router.route('/users/:id?')
    .get(UserController.get)
    .post(UserController.store);

export default router;
