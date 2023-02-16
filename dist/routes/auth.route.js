"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _authController = _interopRequireDefault(require("../controllers/auth.controller"));
const _validationMiddleware = _interopRequireDefault(require("../middlewares/validation.middleware"));
const _usersDto = require("../dtos/users.dto");
const _authMiddleware = _interopRequireDefault(require("../middlewares/auth.middleware"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AuthRoute = class AuthRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, (req, res)=>{
            res.send('Hello gen sec boss!');
        });
        this.router.post(`${this.path}signup`, (0, _validationMiddleware.default)(_usersDto.CreateUserDto, 'body'), this.authController.signUp);
        this.router.post(`${this.path}login`, (0, _validationMiddleware.default)(_usersDto.LoginDto, 'body'), this.authController.login);
        this.router.get(`${this.path}users`, _authMiddleware.default, this.authController.getUsers);
        this.router.get(`${this.path}users/inactive`, _authMiddleware.default, this.authController.getInactiveUsers);
        this.router.patch(`${this.path}user/:id`, _authMiddleware.default, this.authController.updateUser);
    }
    constructor(){
        this.path = '/';
        this.router = (0, _express.Router)();
        this.authController = new _authController.default();
        this.initializeRoutes();
    }
};
const _default = AuthRoute;

//# sourceMappingURL=auth.route.js.map