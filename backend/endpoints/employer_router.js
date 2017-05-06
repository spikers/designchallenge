import express from 'express';
import multer from 'multer';
import { employerModel } from '../database/models/employer';

let router = express.Router();
router.use(multer().none());
router
  .get('/', function (req, res) {
    console.log('router hit');
    res.json({
      'code': 200,
      'msg': 'router hit',
      'sec': 'really hit'
    });
  })
  .post('/', function (req, res) {
    const employer = new employerModel({
      "name": req.body.name,
      "title": req.body.title
    });
    employer.save(function () {
      console.log('Employer Information Saved');
      res.json({
        status: 200,
        action: 'Employer Information Saved'
      });
    })
  });

export { router };