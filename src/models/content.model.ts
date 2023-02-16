import { Content } from '@/interfaces/content.interface';
import { Document, model, Schema } from 'mongoose';

const contentSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const contentModel = model<Content & Document>('Content', contentSchema);

export default contentModel;
