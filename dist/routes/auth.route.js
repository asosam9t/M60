"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_controller_1 = tslib_1.__importDefault(require("@controllers/auth.controller"));
const validation_middleware_1 = tslib_1.__importDefault(require("@/middlewares/validation.middleware"));
const users_dto_1 = require("@/dtos/users.dto");
const auth_middleware_1 = tslib_1.__importDefault(require("@/middlewares/auth.middleware"));
class AuthRoute {
    constructor() {
        this.path = '/';
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, (req, res) => {
            res.send('Hello gen sec boss!');
        });
        this.router.post(`${this.path}signup`, (0, validation_middleware_1.default)(users_dto_1.CreateUserDto, 'body'), this.authController.signUp);
        this.router.post(`${this.path}login`, (0, validation_middleware_1.default)(users_dto_1.LoginDto, 'body'), this.authController.login);
        this.router.get(`${this.path}users`, auth_middleware_1.default, this.authController.getUsers);
        this.router.get(`${this.path}users/inactive`, auth_middleware_1.default, this.authController.getInactiveUsers);
        this.router.patch(`${this.path}user/:id`, auth_middleware_1.default, this.authController.updateUser);
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=auth.route.js.map