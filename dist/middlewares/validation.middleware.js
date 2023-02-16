"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _classTransformer = require("class-transformer");
const _classValidator = require("class-validator");
const _httpException = require("../exceptions/HttpException");
const validationMiddleware = (type, value = 'body', skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true)=>{
    return (req, res, next)=>{
        (0, _classValidator.validate)((0, _classTransformer.plainToClass)(type, req[value]), {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted
        }).then((errors)=>{
            if (errors.length > 0) {
                const derrors = {};
                errors.map((error)=>{
                    const message = Object.values(error.constraints);
                    const label = error.property;
                    derrors[label] = message[0];
                });
                next(new _httpException.HttpException(400, 'Invalid input', derrors));
            } else {
                next();
            }
        });
    };
};
const _default = validationMiddleware;

//# sourceMappingURL=validation.middleware.js.map