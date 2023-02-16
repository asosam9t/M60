export declare class HttpException extends Error {
    code: number;
    errors: {};
    message: string;
    constructor(code: number, message: string, errors?: {});
}
