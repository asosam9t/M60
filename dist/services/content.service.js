"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _util = require("../utils/util");
const _contentModel = _interopRequireDefault(require("../models/content.model"));
const _cloudinaryService = _interopRequireDefault(require("./cloudinary.service"));
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let ContentService = class ContentService {
    async createContent(contentData) {
        if ((0, _util.isEmpty)(contentData)) throw new _httpException.HttpException(400, 'Content data is empty');
        try {
            const content = await this.content.create(_objectSpread({}, contentData));
            return content;
        } catch (error) {
            var ref;
            throw new _httpException.HttpException(409, (ref = error === null || error === void 0 ? void 0 : error.message) !== null && ref !== void 0 ? ref : 'Error creating content');
        }
    }
    async getAllContent() {
        try {
            const content = await this.content.find().sort({
                createdAt: -1
            });
            return content;
        } catch (error) {
            var ref;
            throw new _httpException.HttpException(409, (ref = error === null || error === void 0 ? void 0 : error.message) !== null && ref !== void 0 ? ref : 'Error fetching content');
        }
    }
    async deleteContent(id) {
        try {
            const contentM = await this.content.findById(id);
            await this.cloudinary.deleteVideo(contentM.video);
            await this.cloudinary.deleteVideo(contentM.thumbnail);
            const content = await this.content.findByIdAndDelete(id);
            return content;
        } catch (error) {
            var ref;
            throw new _httpException.HttpException(409, (ref = error === null || error === void 0 ? void 0 : error.message) !== null && ref !== void 0 ? ref : 'Error deleting content');
        }
    }
    constructor(){
        this.content = _contentModel.default;
        this.cloudinary = new _cloudinaryService.default();
    }
};
const _default = ContentService;

//# sourceMappingURL=content.service.js.map