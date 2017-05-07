import mongoose from 'mongoose';

const employerSchema = mongoose.Schema({
  company_name: String,
  job_title: String,
  description: String,
  prompt: String,
  prompt_teaser: String,
  start_time: Date,
  end_time: Date,
  applicants: [{
    id: String,
    name: String,
    submission_file: String, 
    submission_title: String,
    submission_description: String
  }]
});

export { employerSchema };