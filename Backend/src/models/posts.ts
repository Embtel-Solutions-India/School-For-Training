import { Schema, model, Document, Types } from 'mongoose';

export interface IPost extends Document {
  title: string;
  description: string;
  media: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: [true, 'title is required!'],
      trim: true,
      default: null
    },
    description: {
      type: String,
      required: [true, 'description is required!'],
      trim: true,
      default: null
    },
    media: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Post = model<IPost>('Post', postSchema);
