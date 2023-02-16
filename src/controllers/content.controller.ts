import { NextFunction, Response } from 'express';
import CloudinaryService from '@/services/cloudinary.service';
import ContentService from '@/services/content.service';
import { Content } from '@/interfaces/content.interface';
import { HttpException } from '@/exceptions/HttpException';
import userModel from '@/models/users.model';

class ContentController {
  public cloudinary = new CloudinaryService();
  public contentService = new ContentService();
  public users = userModel;

  public uploadSingle = async (req: any, res: Response, next: NextFunction) => {
    try {
      const admin = await this.users.findOne({ _id: req.user._id });

      if (!admin) throw new HttpException(404, 'Unauthorized');

      if (admin.email !== 'sales@faithudo.com') throw new HttpException(404, 'Unauthorized');
      const { video, thumbnail } = req.files;

      const { savedVideo, savedThumb }: any = await this.cloudinary.uploadVideo(video[0], thumbnail[0]);

      const content = await this.contentService.createContent({
        video: savedVideo?.secure_url,
        thumbnail: savedThumb?.secure_url,
        title: req.body.title,
        description: req.body.description,
      });

      res.status(200).json({ content });
    } catch (error) {
      next(error);
    }
  };

  public getAllContent = async (req: any, res: Response, next: NextFunction) => {
    try {
      const content = await this.contentService.getAllContent();

      res.status(200).json({ content });
    } catch (error) {
      next(error);
    }
  };

  public deleteContent = async (req: any, res: Response, next: NextFunction) => {
    try {
      const admin = await this.users.findOne({ _id: req.user._id });

      if (!admin) throw new HttpException(404, 'Unauthorized');

      if (admin.email !== 'sales@faithudo.com') throw new HttpException(404, 'Unauthorized');
      const { id } = req.params;

      const content = await this.contentService.deleteContent(id);

      res.status(200).json({ content });
    } catch (error) {
      next(error);
    }
  };
}

export default ContentController;
