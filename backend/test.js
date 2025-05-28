const nodemailer = require('nodemailer');

async function sendTestMail() {
  const transporter = nodemailer.createTransport({
    host: 'dhinz.in', // working host
    port: 465,
    secure: true,
    auth: {
      user: 'info@dhinz.in',
      pass: 'Dhinesh@123web'
    },
    logger: true,
    debug: true
  });

  try {
    const info = await transporter.sendMail({
      from: '"Dhinesh Test Mail" <info@dhinz.in>',
      to: 'test-cl8ctxm6m@srv1.mail-tester.com', // paste mail-tester email
      subject: 'SMTP Test from Node.js',
      text: 'This is a test email from Node.js using Nodemailer with debug enabled.'
    });

    console.log('✅ Mail sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (err) {
    console.error('❌ Failed to send mail:');
    console.error(err);
  }
}

sendTestMail();
