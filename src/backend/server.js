const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Example: 'Gmail', 'Yahoo', etc.
    auth: {
      user: 'medikondaajaykumar3@gmail.com',
      pass: '8688375854@ajay'
    }
  });

  // Construct email message
  const mailOptions = {
    from: 'your_email@example.com',
    to: 'medikondaajaykumar3@gmail.com', // Your email address
    subject: 'New Form Submission',
    text: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}\nMessage: ${formData.message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
