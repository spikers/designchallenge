import mongoose from 'mongoose';

const employerSchema = mongoose.Schema({
  name: String,
  title: String
});

export { employerSchema };