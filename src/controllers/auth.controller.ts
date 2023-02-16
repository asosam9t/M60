import { HttpException } from '@/exceptions/HttpException';
import userModel from '@/models/users.model';
import MailService from '@/services/mail.service';
import AuthService from '@services/auth.service';
import { NextFunction, Request, Response } from 'express';

class AuthController {
  public authService = new AuthService();
  public mailService = new MailService();
  public users = userModel;

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = await this.authService.signUp(req);

      res.status(200).json({ status: 'success', ...userData, message: 'User Data Fetched' });
    } catch (error) {
      next(error);
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = await this.authService.login(req);

      res.status(200).json({ status: 'success', ...userData, message: 'User Data Fetched' });
    } catch (error) {
      next(error);
    }
  };

  public getUsers = async (req: any, res: Response, next: NextFunction) => {
    try {
      const admin = await this.users.findOne({ _id: req.user._id });

      if (!admin) throw new HttpException(404, 'Unauthorized');

      if (admin.email !== 'sales@faithudo.com') throw new HttpException(404, 'Unauthorized');
      const users = await this.users.find().sort({ createdAt: -1 });

      res.status(200).json({ status: 'success', users, message: 'User Data Fetched' });
    } catch (error) {
      next(error);
    }
  };

  public getInactiveUsers = async (req: any, res: Response, next: NextFunction) => {
    try {
      const admin = await this.users.findOne({ _id: req.user._id });

      if (!admin) throw new HttpException(404, 'Unauthorized');

      if (admin.email !== 'sales@faithudo.com') throw new HttpException(404, 'Unauthorized');
      const users = await this.users.find({ status: 'pending' }).sort({ createdAt: -1 });

      res.status(200).json({ status: 'success', users, message: 'User Data Fetched' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const admin = await this.users.findOne({ _id: req.user._id });

      if (!admin) throw new HttpException(404, 'Unauthorized');

      if (admin.email !== 'sales@faithudo.com') throw new HttpException(404, 'Unauthorized');
      const usermain = await this.users.findOne({ _id: id });

      if (!usermain) throw new Error('User not found');

      const user = await this.users.findOneAndUpdate({ _id: id }, { status: usermain.status === 'active' ? 'inactive' : 'active' }, { new: true });

      res.status(200).json({ status: 'success', user, message: 'User Data Fetched' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
