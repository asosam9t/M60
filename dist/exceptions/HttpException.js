"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpException", {
    enumerable: true,
    get: ()=>HttpException
});
let HttpException = class HttpException extends Error {
    constructor(code, message, errors){
        super(message);
        this.code = code;
        this.message = message;
        this.errors = errors;
    }
};

//# sourceMappingURL=HttpException.js.map