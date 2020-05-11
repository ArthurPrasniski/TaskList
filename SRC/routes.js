import { Router } from 'express';

import UserController from './app/Controllers/UserController';
import SessionController from './app/Controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import TaskController from './app/Controllers/TaskController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/tasks', TaskController.store);
routes.get('/tasks', TaskController.index);
routes.put('/tasks/:task_id', TaskController.update);
routes.delete('/tasks/:task_id', TaskController.delete);

export default routes;
