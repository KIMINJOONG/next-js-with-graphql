import nodeMailer from 'nodemailer';

const email = process.env.NODEMAILER_EMAIL;
const pass = process.env.NODEMAILER_PASSWORD;
export const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
