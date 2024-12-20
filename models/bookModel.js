import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  filePath: { type: String, required: false }, 
  coverImagePath: { type: String, required: false }, 
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;
