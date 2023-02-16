/// <reference types="mongoose" />
import { NextFunction, Response } from 'express';
import CloudinaryService from '@/services/cloudinary.service';
import ContentService from '@/services/content.service';
declare class ContentController {
    cloudinary: CloudinaryService;
    contentService: ContentService;
    users: import("mongoose").Model<import("../interfaces/users.interface").User & import("mongoose").Document<any, any, any>, {}, {}>;
    uploadSingle: (req: any, res: Response, next: NextFunction) => Promise<void>;
    getAllContent: (req: any, res: Response, next: NextFunction) => Promise<void>;
    deleteContent: (req: any, res: Response, next: NextFunction) => Promise<void>;
}
export default ContentController;
