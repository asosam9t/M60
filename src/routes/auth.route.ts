import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';
import { CreateUserDto, LoginDto, PreSignUpDto } from '@/dtos/users.dto';
import authMiddleware from '@/middlewares/auth.middleware';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, (req, res) => {
      res.send('Hello gen sec boss!');
    });
    this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.post(`${this.path}login`, validationMiddleware(LoginDto, 'body'), this.authController.login);
    this.router.get(`${this.path}users`, authMiddleware, this.authController.getUsers);
    this.router.get(`${this.path}users/inactive`, authMiddleware, this.authController.getInactiveUsers);
    this.router.patch(`${this.path}user/:id`, authMiddleware, this.authController.updateUser);
  }
}

export default AuthRoute;
