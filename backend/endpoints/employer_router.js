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
      "company_name": req.body.company_name,
      "job_title": req.body.job_title,
      "description": req.body.description,
      "prompt": req.body.prompt,
      "start_time": req.body.start_time,
      "end_time": req.body.end_time,
    });

    employer.save(function (err) {
      if (err) {
        res.json({
          status: 400,
          action: 'Error.'
        });
      }
      console.log('Employer Information Saved');

      res.json({
        status: 200,
        action: 'Employer Information Saved'
      });

    })
  });
  
export { router };