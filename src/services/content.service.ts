import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import contentModel from '@/models/content.model';
import { Content } from '@/interfaces/content.interface';
import CloudinaryService from './cloudinary.service';

class ContentService {
  public content = contentModel;
  public cloudinary = new CloudinaryService();

  public async createContent(contentData: Content): Promise<Content> {
    if (isEmpty(contentData)) throw new HttpException(400, 'Content data is empty');

    try {
      const content: Content = await this.content.create({ ...contentData });
      return content;
    } catch (error) {
      throw new HttpException(409, error?.message ?? 'Error creating content');
    }
  }

  public async getAllContent(): Promise<Content[]> {
    try {
      const content: Content[] = await this.content.find().sort({ createdAt: -1 });
      return content;
    } catch (error) {
      throw new HttpException(409, error?.message ?? 'Error fetching content');
    }
  }

  public async deleteContent(id: string): Promise<Content> {
    try {
      //delete video and thumbnail from cloudinary
      const contentM: Content = await this.content.findById(id);
      await this.cloudinary.deleteVideo(contentM.video);
      await this.cloudinary.deleteVideo(contentM.thumbnail);

      const content: Content = await this.content.findByIdAndDelete(id);

      return content;
    } catch (error) {
      throw new HttpException(409, error?.message ?? 'Error deleting content');
    }
  }
}

export default ContentService;
