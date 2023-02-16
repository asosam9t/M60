"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _config = require("../config");
const cloudinary = require('cloudinary').v2;
const cloud = cloudinary.config({
    cloud_name: _config.CLOUDINARY_CLOUD_NAME,
    api_key: _config.CLOUDINARY_API_KEY,
    api_secret: _config.CLOUDINARY_API_SECRET
});
let CloudinaryService = class CloudinaryService {
    async uploadVideo(file, thumbNail) {
        try {
            const savedVideo = await cloudinary.uploader.upload(file.path, {
                resource_type: 'video',
                chunk_size: 6000000,
                folder: 'videos',
                eager: [
                    {
                        width: 300,
                        height: 300,
                        crop: 'pad',
                        audio_codec: 'none'
                    },
                    {
                        width: 160,
                        height: 100,
                        crop: 'crop',
                        gravity: 'south',
                        audio_codec: 'none'
                    }
                ],
                eager_async: true,
                use_filename: true,
                unique_filename: false
            });
            const savedThumb = await cloudinary.uploader.upload(thumbNail.path, {
                folder: 'thumbnails',
                resource_type: 'image',
                use_filename: true,
                unique_filename: false
            });
            return {
                savedVideo,
                savedThumb
            };
        } catch (error) {
            return error;
        }
    }
    async deleteVideo(public_id) {
        try {
            await cloudinary.uploader.destroy(public_id);
        } catch (error) {
            return error;
        }
    }
    async uploadImage(image_file, folder) {
        const savedThumb = await cloudinary.uploader.upload(image_file.path, {
            folder: folder,
            resource_type: 'image',
            use_filename: true,
            unique_filename: false
        });
        console.log(savedThumb);
        return savedThumb;
    }
    constructor(){
        this.cloudinary = cloud;
    }
};
const _default = CloudinaryService;

//# sourceMappingURL=cloudinary.service.js.map