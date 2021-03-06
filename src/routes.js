const routes = require('express').Router();
const userController = require('./app/controller/UserController');
const validators = require('./app/middlewares/validators');
const jwtMid = require('./app/middlewares/jwt');

routes.post('/users', validators.userValidators, userController.store);
routes.post('/login', userController.auth);

routes.use(jwtMid);

routes.get('/random', userController.random);
routes.get('/impar/:id', userController.impar);
routes.post('/soma', userController.soma);
routes.post('/nome', userController.nome);
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.delete('/users/:id', userController.destroy);
routes.put(
  '/users/:id',
  validators.userUpdateValidators,
  userController.update
);

module.exports = routes;
