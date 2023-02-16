"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _cloudinaryService = _interopRequireDefault(require("../services/cloudinary.service"));
const _contentService = _interopRequireDefault(require("../services/content.service"));
const _httpException = require("../exceptions/HttpException");
const _usersModel = _interopRequireDefault(require("../models/users.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let ContentController = class ContentController {
    constructor(){
        this.cloudinary = new _cloudinaryService.default();
        this.contentService = new _contentService.default();
        this.users = _usersModel.default;
        this.uploadSingle = async (req, res, next)=>{
            try {
                const admin = await this.users.findOne({
                    _id: req.user._id
                });
                if (!admin) throw new _httpException.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com') throw new _httpException.HttpException(404, 'Unauthorized');
                const { video , thumbnail  } = req.files;
                const { savedVideo , savedThumb  } = await this.cloudinary.uploadVideo(video[0], thumbnail[0]);
                const content = await this.contentService.createContent({
                    video: savedVideo === null || savedVideo === void 0 ? void 0 : savedVideo.secure_url,
                    thumbnail: savedThumb === null || savedThumb === void 0 ? void 0 : savedThumb.secure_url,
                    title: req.body.title,
                    description: req.body.description
                });
                res.status(200).json({
                    content
                });
            } catch (error) {
                next(error);
            }
        };
        this.getAllContent = async (req, res, next)=>{
            try {
                const content = await this.contentService.getAllContent();
                res.status(200).json({
                    content
                });
            } catch (error) {
                next(error);
            }
        };
        this.deleteContent = async (req, res, next)=>{
            try {
                const admin = await this.users.findOne({
                    _id: req.user._id
                });
                if (!admin) throw new _httpException.HttpException(404, 'Unauthorized');
                if (admin.email !== 'sales@faithudo.com') throw new _httpException.HttpException(404, 'Unauthorized');
                const { id  } = req.params;
                const content = await this.contentService.deleteContent(id);
                res.status(200).json({
                    content
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
const _default = ContentController;

//# sourceMappingURL=content.controller.js.map