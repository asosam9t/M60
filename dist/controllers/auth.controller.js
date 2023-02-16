"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("@/exceptions/HttpException");
const users_model_1 = tslib_1.__importDefault(require("@/models/users.model"));
const mail_service_1 = tslib_1.__importDefault(require("@/services/mail.service"));
const auth_service_1 = tslib_1.__importDefault(require("@services/auth.service"));
class AuthController {
    constructor() {
        this.authService = new auth_service_1.default();
        this.mailService = new mail_service_1.default();
        this.users = users_model_1.default;
        this.signUp = async (req, res, next) => {
            try {
                const userData = await this.authService.signUp(req);
                res.status(200).json(Object.assign(Object.assign({ status: 'success' }, userData), { message: 'User Data Fetched' }));
            }
            catch (error) {
                next(error);
            }
        };
        this.login = async (req, res, next) => {
            try {
                const userData = await this.authService.login(req);
                res.status(200).json(Object.assign(Object.assign({ status: 'success' }, userData), { message: 'User Data Fetched' }));
            }
            catch (error) {
                next(error);
            }
        };
        this.getUsers = async (req, res, next) => {
            try {
                const admin = await this.users.findOne({ _id: req.user._id });
                if (!admin)
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com')
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                const users = await this.users.find().sort({ createdAt: -1 });
                res.status(200).json({ status: 'success', users, message: 'User Data Fetched' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getInactiveUsers = async (req, res, next) => {
            try {
                const admin = await this.users.findOne({ _id: req.user._id });
                if (!admin)
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com')
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                const users = await this.users.find({ status: 'pending' }).sort({ createdAt: -1 });
                res.status(200).json({ status: 'success', users, message: 'User Data Fetched' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateUser = async (req, res, next) => {
            const { id } = req.params;
            try {
                const admin = await this.users.findOne({ _id: req.user._id });
                if (!admin)
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com')
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                const usermain = await this.users.findOne({ _id: id });
                if (!usermain)
                    throw new Error('User not found');
                const user = await this.users.findOneAndUpdate({ _id: id }, { status: usermain.status === 'active' ? 'inactive' : 'active' }, { new: true });
                res.status(200).json({ status: 'success', user, message: 'User Data Fetched' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map