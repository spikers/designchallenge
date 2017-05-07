import express from 'express';
import multer from 'multer';
import { employerModel } from '../database/models/employer';
import { applicantEmail } from '../components/applicant_campaigns';

let router = express.Router();
router.use(multer().none());
router
  .get('/', function (req, res) {
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
      "prompt_teaser": req.body.prompt_teaser,
      "start_time": req.body.start_time,
      "end_time": req.body.end_time,
    });
    applicantEmail();

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
  })
  
export { router };