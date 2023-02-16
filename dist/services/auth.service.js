"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _config = require("../config");
const _httpException = require("../exceptions/HttpException");
const _usersModel = _interopRequireDefault(require("../models/users.model"));
const _bcrypt = require("bcrypt");
const _jsonwebtoken = require("jsonwebtoken");
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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
let AuthService = class AuthService {
    createToken(user) {
        const dataStoredInToken = {
            _id: user._id
        };
        const secretKey = _config.SECRET_KEY;
        return {
            token: (0, _jsonwebtoken.sign)(dataStoredInToken, secretKey)
        };
    }
    constructor(){
        this.users = _usersModel.default;
        this.signUp = async (req)=>{
            const userData = req.body;
            userData.email = userData.email.toLowerCase();
            let user = await this.users.findOne({
                email: userData.email.toLowerCase()
            }).lean();
            const hashedPassword = await (0, _bcrypt.hash)(userData.password, 10);
            if (user) {
                throw new _httpException.HttpException(409, `User with email ${userData.email} already exists`);
            } else {
                user = await this.users.create(_objectSpreadProps(_objectSpread({}, userData), {
                    password: hashedPassword
                }));
            }
            return {
                user: user
            };
        };
        this.login = async (req)=>{
            const userData = req.body;
            const user = await this.users.findOne({
                email: userData.email.toLowerCase()
            }).lean();
            if (!user) throw new _httpException.HttpException(409, 'User not found');
            if (user.status === 'inactive' || user.status === 'pending') throw new _httpException.HttpException(409, 'Account not active');
            const isPasswordMatching = await (0, _bcrypt.compare)(userData.password, user.password);
            if (!isPasswordMatching) throw new _httpException.HttpException(409, 'Invalid Credentials');
            const { password  } = user, userWithoutPassword = _objectWithoutProperties(user, [
                "password"
            ]);
            const { token  } = this.createToken(user);
            return {
                user: _objectSpread({}, userWithoutPassword),
                token
            };
        };
    }
};
const _default = AuthService;

//# sourceMappingURL=auth.service.js.map