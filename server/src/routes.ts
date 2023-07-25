import express from 'express';
import MovieController from './controllers/movie/MovieController';
//import authMiddleware from './auth';

const routes = express.Router();

const movieController = new MovieController();
//routes.post('/authenticate', authController.signIn);

//routes.use(authMiddleware);
routes.get('/movie', movieController.list);

export default routes;