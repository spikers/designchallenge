import express from 'express';
import bluebird from 'bluebird';
import mongoose from 'mongoose';
mongoose.Promise = bluebird;

import { resolve } from 'path';

const app = express();
import config from './config';
mongoose.connect(config.db);

import { router as employerRouter} from './backend/endpoints/employer_router';
app.use('/employer', employerRouter);

import {router as applicantRouter} from './backend/endpoints/applicant_router';
app.use('/applicant', applicantRouter);

import { router as jobsRouter } from './backend/endpoints/jobs_router';
app.use('/jobs', jobsRouter);


import multer from 'multer';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    console.log('file', file);
    cb(null, file.originalname);
  }
});
const upload = multer({storage: storage});

app.post('/test', upload.single('work'), function (req, res, next) {
  console.log(req.file);
  console.log(req.file.path);
  res.send('finished');
});

app.get('/', function (req, res) {
  console.log('hi');
  res.send('<h1>Hello Friend</h1>');
})

.post('/', function (req, res) {
  console.log(req.body);
})

app.use(express.static(resolve(__dirname, 'public')));

app.listen(8000, function () {
  console.log('Listening');
});