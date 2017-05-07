import express from 'express';
import { employerModel } from '../database/models/employer';

let router = express.Router();
router
  .get('/', function (req, res) {
    employerModel.find(function (err, data) {
      res.json(data);
      return;
    })
  })
  .post('/', function (req, res) {
    
  });

export { router };