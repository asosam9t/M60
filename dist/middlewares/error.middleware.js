"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@utils/logger");
const errorMiddleware = (error, req, res, next) => {
    try {
        const code = error.code || 500;
        const status = 'failed';
        const message = error.message || 'Something went wrong';
        const errors = error.errors || {};
        logger_1.logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${code}, Message:: ${message}`);
        res.status(code).json({ status, message, errors });
    }
    catch (error) {
        next(error);
    }
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map