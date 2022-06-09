import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, subject, message } = req.body;

  const msg = {
    to: process.env.CONTACT_EMAIL, // Change to your recipient
    from: 'ray@raysy.dev', // Change to your verified sender
    subject,
    text: `${name}\n${email}\n${message}`,
  };

  try {
    const response = await sgMail.send(msg);
    res.status(response[0].statusCode).json(response[0].headers);
  } catch (err) {
    res.status(500).json(err);
  }
}
