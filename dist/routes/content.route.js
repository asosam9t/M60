"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_controller_1 = tslib_1.__importDefault(require("@controllers/auth.controller"));
const validation_middleware_1 = tslib_1.__importDefault(require("@/middlewares/validation.middleware"));
const content_controller_1 = tslib_1.__importDefault(require("@/controllers/content.controller"));
const content_dto_1 = require("@/dtos/content.dto");
const auth_middleware_1 = tslib_1.__importDefault(require("@/middlewares/auth.middleware"));
const multer_1 = tslib_1.__importDefault(require("multer"));
const upload = (0, multer_1.default)({ dest: 'uploads/' });
class ContentRoute {
    constructor() {
        this.path = '/content/';
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.default();
        this.contentController = new content_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}`, auth_middleware_1.default, upload.fields([{ name: 'video' }, { name: 'thumbnail' }]), (0, validation_middleware_1.default)(content_dto_1.ContentDto, 'body'), this.contentController.uploadSingle);
        this.router.get(`${this.path}`, this.contentController.getAllContent);
        this.router.delete(`${this.path}:id`, auth_middleware_1.default, this.contentController.deleteContent);
    }
}
exports.default = ContentRoute;
//# sourceMappingURL=content.route.js.map