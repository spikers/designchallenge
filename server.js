import express from 'express';
import bluebird from 'bluebird';
import mongoose from 'mongoose';
mongoose.Promise = bluebird;

const app = express();
import config from './config';
mongoose.connect(config.db);

import { router as employerRouter} from './backend/endpoints/employer_router';
app.use('/employer', employerRouter);

import {router as applicantRouter} from './backend/endpoints/applicant_router';
app.use('/applicant', applicantRouter);

import { router as jobsRouter } from './backend/endpoints/jobs_router';
app.use('/jobs', jobsRouter);

app.get('/', function (req, res) {
  console.log('hi');
  res.send('<h1>Hello Friend</h1>');
})

app.listen(8000, function () {
  console.log('Listening');
});