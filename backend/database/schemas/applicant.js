import mongoose from 'mongoose';

const applicantSchema = mongoose.Schema({
  applicant_name: String,
  applicant_title: String
});

export { applicantSchema };