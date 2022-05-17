import  express from 'express';
// import ProductController from '../controllers/asset_controller.js';
import AuthMiddleware from '../shared/middlewares/ensure_auth.js';

let router = express.Router();

router.use(AuthMiddleware.user);

// router.route('/products/:id?')
//    .get(ProductController.get)
//    .post(ProductController.store);

export default router;
