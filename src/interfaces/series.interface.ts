import { Types } from 'mongoose';

export interface Series {
  category: Types.ObjectId;
  title: string;
  description: string;
}
