declare class CloudinaryService {
    cloudinary: any;
    uploadVideo(file: any, thumbNail: any): Promise<any>;
    deleteVideo(public_id: string): Promise<any>;
    uploadImage(image_file: any, folder: string): Promise<any>;
}
export default CloudinaryService;
