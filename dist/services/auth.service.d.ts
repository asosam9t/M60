/// <reference types="mongoose" />
import { TokenData } from '@/interfaces/auth.interface';
import { User, userWithoutPassword } from '@/interfaces/users.interface';
import { Request } from 'express';
declare class AuthService {
    users: import("mongoose").Model<User & import("mongoose").Document<any, any, any>, {}, {}>;
    createToken(user: User): TokenData;
    signUp: (req: any) => Promise<{
        user: userWithoutPassword;
    }>;
    login: (req: Request) => Promise<{
        user: userWithoutPassword;
        token: string;
    }>;
}
export default AuthService;
