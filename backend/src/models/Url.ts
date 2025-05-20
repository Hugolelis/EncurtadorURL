// modules 
import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    originalURL: { type: String, required: true },
    shortURL: { type: String, required: true },
    shortCode: { type: String, required: true },
    createdAt: { type: Date, required: true },
})

export const Url = mongoose.model('Url', UrlSchema)