import express from 'express';
const router = express.Router();

import multer from 'multer';
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    const d = new Date();
    const fileName = file.originalname.substring(0, file.originalname.indexOf('.')) + d + file.originalname.substring(file.originalname.indexOf('.'));
    cb(null, fileName);
  }
});
const upload = multer({storage: storage});

import { employerModel } from '../database/models/employer';

import { employerEmail } from '../components/email_campaigns';

router
  .get('/id/:job_id', function (req, res) {
    employerModel.findById(req.params.job_id, function (err, data) {
      res.json(data);
    })
  })
  .post('/image', upload.single('work'), function (req, res) {
    res.json({
      status: 200,
      action: "Submitted successfully",
      location: "http://localhost:8000/" + encodeURIComponent(req.file.path.substring(req.file.path.indexOf('/')))
    })
  })
  
  .post('/:job_id', upload.none(), function (req, res) {
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
        console.log(err);
        if (err) {
          res.json({
            status: 400,
            action: "Error"
          });
          return;
        }  
        res.json({
          status: 200,
          action: "Submitted successfully",
          location: req.params.submission_file
        });
        return;
      }
    );
    employerEmail();
  })


export { router };