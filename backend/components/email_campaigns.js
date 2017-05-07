'use strict';
import config from '../../config';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email,
        pass: config.password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Applican Support" <support@applican.com>', // sender address
    to: 'timfengineering@gmail.com', // list of receivers
    subject: 'For Employers - Your Design Challenge is Complete!', // Subject line
    text: 'Your candidates have just completed their design challenge. Use this link to review the results and select candidates who will be moving forward with your hiring process. http://localhost:8000/dashboard.html . Please let us know if you have any questions. Team Applican',
    html: `Hi Jade,<br>
<br>
Your candidates have just completed their design challenge. <br>
<br>
Click below to review the results and select candidates who will be moving forward with your hiring process. <br>
<br>
<a href="http://localhost:8000/dashboard.html">See Candidate's Work Here</a><br>
<br>
Please let us know if you have any questions.<br>
<br>
<br>
Warmly,<br>
Team Applican<br>` // html body
};

// send mail with defined transport object
const employerEmail = function () {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

export { employerEmail };