"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _usersModel = _interopRequireDefault(require("../models/users.model"));
const _mailService = _interopRequireDefault(require("../services/mail.service"));
const _authService = _interopRequireDefault(require("../services/auth.service"));
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
let AuthController = class AuthController {
    constructor(){
        this.authService = new _authService.default();
        this.mailService = new _mailService.default();
        this.users = _usersModel.default;
        this.signUp = async (req, res, next)=>{
            try {
                const userData = await this.authService.signUp(req);
                res.status(200).json(_objectSpreadProps(_objectSpread({
                    status: 'success'
                }, userData), {
                    message: 'User Data Fetched'
                }));
            } catch (error) {
                next(error);
            }
        };
        this.login = async (req, res, next)=>{
            try {
                const userData = await this.authService.login(req);
                res.status(200).json(_objectSpreadProps(_objectSpread({
                    status: 'success'
                }, userData), {
                    message: 'User Data Fetched'
                }));
            } catch (error) {
                next(error);
            }
        };
        this.getUsers = async (req, res, next)=>{
            try {
                const admin = await this.users.findOne({
                    _id: req.user._id
                });
                if (!admin) throw new _httpException.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com') throw new _httpException.HttpException(404, 'Unauthorized');
                const users = await this.users.find().sort({
                    createdAt: -1
                });
                res.status(200).json({
                    status: 'success',
                    users,
                    message: 'User Data Fetched'
                });
            } catch (error) {
                next(error);
            }
        };
        this.getInactiveUsers = async (req, res, next)=>{
            try {
                const admin = await this.users.findOne({
                    _id: req.user._id
                });
                if (!admin) throw new _httpException.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com') throw new _httpException.HttpException(404, 'Unauthorized');
                const users = await this.users.find({
                    status: 'pending'
                }).sort({
                    createdAt: -1
                });
                res.status(200).json({
                    status: 'success',
                    users,
                    message: 'User Data Fetched'
                });
            } catch (error) {
                next(error);
            }
        };
        this.updateUser = async (req, res, next)=>{
            const { id  } = req.params;
            try {
                const admin = await this.users.findOne({
                    _id: req.user._id
                });
                if (!admin) throw new _httpException.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com') throw new _httpException.HttpException(404, 'Unauthorized');
                const usermain = await this.users.findOne({
                    _id: id
                });
                if (!usermain) throw new Error('User not found');
                const user = await this.users.findOneAndUpdate({
                    _id: id
                }, {
                    status: usermain.status === 'active' ? 'inactive' : 'active'
                }, {
                    new: true
                });
                res.status(200).json({
                    status: 'success',
                    user,
                    message: 'User Data Fetched'
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
const _default = AuthController;

//# sourceMappingURL=auth.controller.js.map