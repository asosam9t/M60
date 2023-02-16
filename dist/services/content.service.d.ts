/// <reference types="mongoose" />
import { Content } from '@/interfaces/content.interface';
import CloudinaryService from './cloudinary.service';
declare class ContentService {
    content: import("mongoose").Model<Content & import("mongoose").Document<any, any, any>, {}, {}>;
    cloudinary: CloudinaryService;
    createContent(contentData: Content): Promise<Content>;
    getAllContent(): Promise<Content[]>;
    deleteContent(id: string): Promise<Content>;
}
export default ContentService;
