import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';
import ContentController from '@/controllers/content.controller';
import { ContentDto, ContentSeriesDto, CreatSeriesDto } from '@/dtos/content.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

class ContentRoute implements Routes {
  public path = '/content/';
  public router = Router();
  public authController = new AuthController();
  public contentController = new ContentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      authMiddleware,
      upload.fields([{ name: 'video' }, { name: 'thumbnail' }]),
      validationMiddleware(ContentDto, 'body'),
      this.contentController.uploadSingle,
    );

    this.router.get(`${this.path}`, this.contentController.getAllContent);
    this.router.delete(`${this.path}:id`, authMiddleware, this.contentController.deleteContent);
  }
}

export default ContentRoute;
