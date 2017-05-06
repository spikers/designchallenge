import mongoose from 'mongoose';
import { employerSchema as employerSchema } from '../schemas/employer';

const employerModel = mongoose.model('employer', employerSchema);

export { employerModel };