import { Schema, model, Document, Types } from "mongoose"; 

export interface IReply {
    _id?: Types.ObjectId;
    message: string;
    createdAt: Date;
}

export interface IContact extends Document {
    name: string;
    email: string;
    phone: string;
    message: string;
    courseId?: Types.ObjectId | null;     
    courseName?: string | null;           
    replies?: IReply[];
    createdAt: Date;
}

const replySchema = new Schema<IReply>({
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const contactSchema = new Schema<IContact>({
    name: { type: String, required: true, default: null },

    email: {
        type: String,
        required: true,
        default: null,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },

    phone: { type: String, required: true, default: null },

    message: { type: String, required: true, default: null },

    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        default: null,
    },

    courseName: {
        type: String,
        default: null,
    },

    replies: { type: [replySchema], default: [] },

    createdAt: { type: Date, default: Date.now },
});

export const Contact = model<IContact>("Contact", contactSchema);
