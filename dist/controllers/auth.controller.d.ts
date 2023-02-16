/// <reference types="mongoose" />
import MailService from '@/services/mail.service';
import AuthService from '@services/auth.service';
import { NextFunction, Request, Response } from 'express';
declare class AuthController {
    authService: AuthService;
    mailService: MailService;
    users: import("mongoose").Model<import("../interfaces/users.interface").User & import("mongoose").Document<any, any, any>, {}, {}>;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUsers: (req: any, res: Response, next: NextFunction) => Promise<void>;
    getInactiveUsers: (req: any, res: Response, next: NextFunction) => Promise<void>;
    updateUser: (req: any, res: Response, next: NextFunction) => Promise<void>;
}
export default AuthController;
