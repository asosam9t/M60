"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/no-unused-vars */
const config_1 = require("@/config");
const HttpException_1 = require("@/exceptions/HttpException");
const users_model_1 = tslib_1.__importDefault(require("@models/users.model"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthService {
    constructor() {
        this.users = users_model_1.default;
        this.signUp = async (req) => {
            const userData = req.body;
            userData.email = userData.email.toLowerCase();
            let user = await this.users.findOne({ email: userData.email.toLowerCase() }).lean();
            const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
            if (user) {
                throw new HttpException_1.HttpException(409, `User with email ${userData.email} already exists`);
            }
            else {
                user = await this.users.create(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
            }
            return {
                user: user,
            };
        };
        this.login = async (req) => {
            const userData = req.body;
            const user = await this.users.findOne({ email: userData.email.toLowerCase() }).lean();
            if (!user)
                throw new HttpException_1.HttpException(409, 'User not found');
            if (user.status === 'inactive' || user.status === 'pending')
                throw new HttpException_1.HttpException(409, 'Account not active');
            const isPasswordMatching = await (0, bcrypt_1.compare)(userData.password, user.password);
            if (!isPasswordMatching)
                throw new HttpException_1.HttpException(409, 'Invalid Credentials');
            const { password } = user, userWithoutPassword = tslib_1.__rest(user, ["password"]);
            const { token } = this.createToken(user);
            return {
                user: Object.assign({}, userWithoutPassword),
                token,
            };
        };
    }
    createToken(user) {
        const dataStoredInToken = { _id: user._id };
        const secretKey = config_1.SECRET_KEY;
        return { token: (0, jsonwebtoken_1.sign)(dataStoredInToken, secretKey) };
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map