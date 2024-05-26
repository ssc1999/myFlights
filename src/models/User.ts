import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    name: string;
    lastname: string;
    cif: string;
    preferences: string[];
    searchHistory: string[];
    bookmarks: string[];
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    cif: {
        type: String,
        required: true
    },
    preferences: {
        type: [String],
        default: []
    },
    searchHistory: {
        type: [String],
        default: []
    },
    bookmarks: {
        type: [String],
        default: []
    },
});

export default model<IUser>('User', userSchema);
