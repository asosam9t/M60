"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cloudinary_service_1 = tslib_1.__importDefault(require("@/services/cloudinary.service"));
const content_service_1 = tslib_1.__importDefault(require("@/services/content.service"));
const HttpException_1 = require("@/exceptions/HttpException");
const users_model_1 = tslib_1.__importDefault(require("@/models/users.model"));
class ContentController {
    constructor() {
        this.cloudinary = new cloudinary_service_1.default();
        this.contentService = new content_service_1.default();
        this.users = users_model_1.default;
        this.uploadSingle = async (req, res, next) => {
            try {
                const admin = await this.users.findOne({ _id: req.user._id });
                if (!admin)
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com')
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                const { video, thumbnail } = req.files;
                const { savedVideo, savedThumb } = await this.cloudinary.uploadVideo(video[0], thumbnail[0]);
                const content = await this.contentService.createContent({
                    video: savedVideo === null || savedVideo === void 0 ? void 0 : savedVideo.secure_url,
                    thumbnail: savedThumb === null || savedThumb === void 0 ? void 0 : savedThumb.secure_url,
                    title: req.body.title,
                    description: req.body.description,
                });
                res.status(200).json({ content });
            }
            catch (error) {
                next(error);
            }
        };
        this.getAllContent = async (req, res, next) => {
            try {
                const content = await this.contentService.getAllContent();
                res.status(200).json({ content });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteContent = async (req, res, next) => {
            try {
                const admin = await this.users.findOne({ _id: req.user._id });
                if (!admin)
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com')
                    throw new HttpException_1.HttpException(404, 'Unauthorized');
                const { id } = req.params;
                const content = await this.contentService.deleteContent(id);
                res.status(200).json({ content });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = ContentController;
//# sourceMappingURL=content.controller.js.map