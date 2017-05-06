import express from 'express';
import bluebird from 'bluebird';
import mongoose from 'mongoose';

const app = express();

import config from './config';
mongoose.connect(config.db);
import { employerModel } from './backend/database/models/employer';

import multer from 'multer';
let upload = multer();

import { router } from './backend/endpoints/employer_router';
app.use('/router', router);

app.get('/', function (req, res) {
  console.log('hi');
  res.send('<h1>Hello Friend</h1>');
})

app.listen(8000, function () {
  console.log('Listening');
});