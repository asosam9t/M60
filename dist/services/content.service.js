"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("@exceptions/HttpException");
const util_1 = require("@utils/util");
const content_model_1 = tslib_1.__importDefault(require("@/models/content.model"));
const cloudinary_service_1 = tslib_1.__importDefault(require("./cloudinary.service"));
class ContentService {
    constructor() {
        this.content = content_model_1.default;
        this.cloudinary = new cloudinary_service_1.default();
    }
    async createContent(contentData) {
        var _a;
        if ((0, util_1.isEmpty)(contentData))
            throw new HttpException_1.HttpException(400, 'Content data is empty');
        try {
            const content = await this.content.create(Object.assign({}, contentData));
            return content;
        }
        catch (error) {
            throw new HttpException_1.HttpException(409, (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Error creating content');
        }
    }
    async getAllContent() {
        var _a;
        try {
            const content = await this.content.find().sort({ createdAt: -1 });
            return content;
        }
        catch (error) {
            throw new HttpException_1.HttpException(409, (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Error fetching content');
        }
    }
    async deleteContent(id) {
        var _a;
        try {
            //delete video and thumbnail from cloudinary
            const contentM = await this.content.findById(id);
            await this.cloudinary.deleteVideo(contentM.video);
            await this.cloudinary.deleteVideo(contentM.thumbnail);
            const content = await this.content.findByIdAndDelete(id);
            return content;
        }
        catch (error) {
            throw new HttpException_1.HttpException(409, (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : 'Error deleting content');
        }
    }
}
exports.default = ContentService;
//# sourceMappingURL=content.service.js.map