"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    constructor(code, message, errors) {
        super(message);
        this.code = code;
        this.message = message;
        this.errors = errors;
    }
}
exports.HttpException = HttpException;
//# sourceMappingURL=HttpException.js.map