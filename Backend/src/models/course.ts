import mongoose, { Schema, Document, Model, Date } from "mongoose";

export interface ICourse extends Document {
  title: string;
  duration: string;
  upcomingBatch: boolean;
  upcomingBatchInfo: string;
  startDate: string;
  shortDescription: string;
  status: string;
  fullDescription: string;
  buttons: {
    enroll: string;
    curriculum: string;
  };
  courseStructure: {
    cardName: string;
    cardDescription: string;
  }[];
  courseFeatures: string[];
  whatWillYouLearn: {
    description: string;
    points: string[];
  };
  courseCurriculum: {
    dropdownTitle: string;
    content: string;
  }[];
  instructors: {
    name: string;
    description: string;
    image?: string;
  }[];

  // single main image (for backward compatibility)
  image?: string;

  // ⭐ NEW: multiple images ⭐
  images?: string[];
}

const CourseSchema: Schema<ICourse> = new Schema(
  {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    shortDescription: { type: String, required: true },
    status: { type: String, required: true },
    fullDescription: { type: String, required: true },
    upcomingBatch: { type: Boolean },
    startDate: { type: String },
    upcomingBatchInfo: { type: String },

    buttons: {
      enroll: { type: String, default: "Enroll Now" },
      curriculum: { type: String, default: "Course Curriculum" },
    },

    courseStructure: [
      {
        cardName: { type: String },
        cardDescription: { type: String },
      },
    ],

    courseFeatures: [String],

    whatWillYouLearn: {
      description: { type: String },
      points: [String],
    },

    courseCurriculum: [
      {
        dropdownTitle: { type: String },
        content: { type: String },
      },
    ],

    instructors: [
      {
        name: { type: String },
        description: { type: String },
        image: { type: String },
      },
    ],

    // old single image
    image: { type: String },

    // ⭐ array of images for multiple uploads ⭐
    images: [String],
  },
  { timestamps: true },
);

export const Course: Model<ICourse> = mongoose.model<ICourse>(
  "Course",
  CourseSchema,
);
