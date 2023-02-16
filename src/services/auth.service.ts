/* eslint-disable @typescript-eslint/no-unused-vars */
import { SECRET_KEY } from '@/config';
import { CreateUserDto, LoginDto } from '@/dtos/users.dto';
import { HttpException } from '@/exceptions/HttpException';
import { DataStoredInToken, Otp, TokenData } from '@/interfaces/auth.interface';
import { User, userWithoutPassword } from '@/interfaces/users.interface';
import userModel from '@models/users.model';
import { compare, hash } from 'bcrypt';
import { isEmpty } from 'class-validator';
import { Request } from 'express';
import { sign } from 'jsonwebtoken';

class AuthService {
  public users = userModel;

  public createToken(user: User): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;

    return { token: sign(dataStoredInToken, secretKey) };
  }

  public signUp = async (req): Promise<{ user: userWithoutPassword }> => {
    const userData: CreateUserDto = req.body;
    userData.email = userData.email.toLowerCase();

    let user = await this.users.findOne({ email: userData.email.toLowerCase() }).lean();

    const hashedPassword = await hash(userData.password, 10);

    if (user) {
      throw new HttpException(409, `User with email ${userData.email} already exists`);
    } else {
      user = await this.users.create({ ...userData, password: hashedPassword });
    }

    return {
      user: user,
    };
  };

  public login = async (req: Request): Promise<{ user: userWithoutPassword; token: string }> => {
    const userData: LoginDto = req.body;

    const user = await this.users.findOne({ email: userData.email.toLowerCase() }).lean();

    if (!user) throw new HttpException(409, 'User not found');

    if (user.status === 'inactive' || user.status === 'pending') throw new HttpException(409, 'Account not active');

    const isPasswordMatching: boolean = await compare(userData.password, user.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Invalid Credentials');

    const { password, ...userWithoutPassword } = user;
    const { token } = this.createToken(user);

    return {
      user: {
        ...userWithoutPassword,
      },
      token,
    };
  };
}

export default AuthService;
