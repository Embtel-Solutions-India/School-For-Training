import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  subTitle?: string;
  description: string;
  shortDescription?: string;
  author?: string;
  category: string;
  image?: string;          
  images?: string[];       
}

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    subTitle: { type: String },
    description: { type: String, required: true },
    shortDescription: { type: String },
    author: { type: String },
    category: { type: String },
    image: { type: String }, 
    images: [{ type: String }], 
  },
  { timestamps: true }
);

export const Blog = mongoose.model<IBlog>("Blog", blogSchema);
