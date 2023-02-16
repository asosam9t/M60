import { Content } from '@/interfaces/content.interface';
import { Document } from 'mongoose';
declare const contentModel: import("mongoose").Model<Content & Document<any, any, any>, {}, {}>;
export default contentModel;
