import express from 'express';
import multer from 'multer';
const router = express.Router();
router.use(multer().none());

import { employerModel } from '../database/models/employer';

router
  .get('/:job_id', function (req, res) {
    employerModel.findById(req.params.job_id, function (err, data) {
      res.json(data);
    })
  })
  
  .post('/:job_id', function (req, res) {
    employerModel.findByIdAndUpdate(
      req.params.job_id,
      {$push: {
        "applicants": {
          id: req.body.id,
          name: req.body.name,
          submission_file: req.body.submission_file,
          submission_title: req.body.submission_title,
          submission_description: req.body.submission_description
        }
      }},
      {safe: true, new : true},
      function(err, model) {
        if (err) {
          res.json({
            status: 400,
            action: "Error"
          });
          return;
        }  
        res.json({
          status: 200,
          action: "Submitted successfully"
        });
        return;
      }
    );
  })


export { router };