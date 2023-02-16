"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _logger = require("../utils/logger");
const errorMiddleware = (error, req, res, next)=>{
    try {
        const code = error.code || 500;
        const status = 'failed';
        const message = error.message || 'Something went wrong';
        const errors = error.errors || {};
        _logger.logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${code}, Message:: ${message}`);
        res.status(code).json({
            status,
            message,
            errors
        });
    } catch (error1) {
        next(error1);
    }
};
const _default = errorMiddleware;

//# sourceMappingURL=error.middleware.js.map