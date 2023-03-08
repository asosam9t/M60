const cloudinary = require('cloudinary').v2;
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from '@/config';

const cloud = cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

class CloudinaryService {
  public cloudinary = cloud;

  public async uploadVideo(file: any, thumbNail: any): Promise<any> {
    try {
      const savedVideo = await cloudinary.uploader.upload(file.path, {
        resource_type: 'video',
        chunk_size: 600000000,
        folder: 'videos',
        eager: [
          {
            width: 300,
            height: 300,
            crop: 'pad',
            audio_codec: 'none',
          },
          {
            width: 160,
            height: 100,
            crop: 'crop',
            gravity: 'south',
            audio_codec: 'none',
          },
        ],
        eager_async: true,
        use_filename: true,
        unique_filename: false,
      });
      const savedThumb = await cloudinary.uploader.upload(thumbNail.path, {
        folder: 'thumbnails',
        resource_type: 'image',
        use_filename: true,
        unique_filename: false,
      });

      console.log(savedVideo, savedThumb);
      return { savedVideo, savedThumb };
    } catch (error) {
      return error;
    }
  }
  public async deleteVideo(public_id: string): Promise<any> {
    try {
      await cloudinary.uploader.destroy(public_id);
    } catch (error) {
      return error;
    }
  }

  // upload only image
  public async uploadImage(image_file: any): Promise<any> {
    const savedThumb = await cloudinary.uploader.upload(image_file.path, {
      folder: 'thumbnails',
      resource_type: 'image',
      use_filename: true,
      unique_filename: false,
    });
    return savedThumb;
  }
}

export default CloudinaryService;
