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
    subject: 'Next Steps: Design Challenge', // Subject line
    text: 'Your candidates have just completed their design challenge. Use this link to review the results and select candidates who will be moving forward with your hiring process. http://localhost:8000/dashboard.html . Please let us know if you have any questions. Team Applican',
    html: `Hi Jade,<br>
<br>
Congrats! You’ve been chosen to move onto the next round of the hiring process.<br>
<br>
ZipRecruiter would like you to participate in a design challenge. This will be a scheduled 2 hour challenge at the date and time below, determined from your list of available dates and times:<br>
<br>
Date: May 7, 2017<br>
Time: 2:00 PM<br>
<br>
Add a calendar reminder and click on the button 10 minutes before the challenge starts:<br>
<br>
<a href="http://localhost:8000/jobs/590ec8431f2f400574c9aa9b.html">Design Challenge Link</a>
<br>
<br>
We wish you best of luck!<br>
<br>
<br>
Warmly,<br>
Team Applican` // html body
};

// send mail with defined transport object
const applicantEmail = function () {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

export { applicantEmail };