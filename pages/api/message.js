import * as FormData from 'form-data';
import Mailgun from 'mailgun.js';

export default async function handler(req, res) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
  });

  const { name, email, subject, message } = req.body;

  const params = {
    from: `Portfolio Contact <mailgun@${process.env.MAILGUN_DOMAIN}>`,
    to: [process.env.CONTACT_EMAIL],
    subject: `[Portfolio Contact] ${subject}`,
    text: `${name}\n${email}\n\n${message}`,
  };

  try {
    const msg = await mg.messages.create(process.env.MAILGUN_DOMAIN, params);
    res.status(201).json(msg);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}
