import express from 'express';
import { employerModel } from '../database/models/employer';

let router = express.Router();
router
  .get('/', function (req, res) {
    employerModel.find(function (err, data) {
      const currentDate = new Date();
      let responseData = data.map(function (item) {
        const itemDate = new Date(item.start_time);
        if (currentDate < itemDate) {
          console.log(item.start_time);
          item.prompt = null;
        };
        item.applicants = null;
      });
      res.json(data);
      return;
    })
  })
  .post('/', function (req, res) {
    
  });

export { router };