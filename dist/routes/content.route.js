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
const _contentController = _interopRequireDefault(require("../controllers/content.controller"));
const _contentDto = require("../dtos/content.dto");
const _authMiddleware = _interopRequireDefault(require("../middlewares/auth.middleware"));
const _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const upload = (0, _multer.default)({
    dest: 'uploads/'
});
let ContentRoute = class ContentRoute {
    initializeRoutes() {
        this.router.post(`${this.path}`, _authMiddleware.default, upload.fields([
            {
                name: 'video'
            },
            {
                name: 'thumbnail'
            }
        ]), (0, _validationMiddleware.default)(_contentDto.ContentDto, 'body'), this.contentController.uploadSingle);
        this.router.get(`${this.path}`, this.contentController.getAllContent);
        this.router.delete(`${this.path}:id`, _authMiddleware.default, this.contentController.deleteContent);
    }
    constructor(){
        this.path = '/content/';
        this.router = (0, _express.Router)();
        this.authController = new _authController.default();
        this.contentController = new _contentController.default();
        this.initializeRoutes();
    }
};
const _default = ContentRoute;

//# sourceMappingURL=content.route.js.map