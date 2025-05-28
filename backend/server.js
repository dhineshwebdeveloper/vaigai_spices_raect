const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'dhinz.in', // ✅ working from test.js
  port: 465,
  secure: true,
  auth: {
    user: 'info@dhinz.in',
    pass: 'Dhinesh@123web'
  },
  logger: true,   // Optional: for debugging
  debug: true     // Optional: for debugging
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: '"Vaigai Spices Website" <info@dhinz.in>',
    to: 'info@dhinz.in', // receive at your same address
    subject: subject || 'New Contact Form Message',
    html: `
      <h3>New message from your contact form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Message sent: %s', info.messageId);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending mail:', error);
    res.status(500).json({ success: false, message: 'Message failed to send' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
