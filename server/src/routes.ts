import express from 'express';
import UnitOfMeasurementController from './controllers/unitOfMeasurement/UnitOfMeasurementController';
import GroupController from './controllers/group/GroupController';
import ProductsController from './controllers/product/ProductController';
import authMiddleware from './auth';
import SignController from './controllers/sign/SignController';

const routes = express.Router();

const unitOfMeasurementController = new UnitOfMeasurementController();
const groupController = new GroupController();
const productsController = new ProductsController();
const authController = new SignController();

routes.post('/authenticate', authController.signIn);

//routes.use(authMiddleware);
routes.get('/unit-of-measurement', unitOfMeasurementController.listAll);

routes.get('/group-controller', groupController.listAll);

routes.post('/products', productsController.create);
routes.get('/products', productsController.listAll);
routes.get('/products/:codigo', productsController.findById);
routes.put('/products', productsController.edit);
routes.delete('/products/:codigo', productsController.delete);

export default routes;