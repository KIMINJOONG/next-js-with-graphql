import {mailOptions, transporter} from 'config/nodemailer';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const data = req.body;
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `${data.company}/${data.name} 님의 문의메일입니다.`,
      text: `회사명/단체명: ${data.company}\n성함/직책: ${data.name}\n연락처: ${data.phone}\nE-mail: ${data.email}\n예산규모:${data.money}\n사업문의:${data.content}`,
    });
    return res.status(200).json({success: true});
  } catch (error: any) {
    return res.status(400).json({message: error.message});
  }
}
