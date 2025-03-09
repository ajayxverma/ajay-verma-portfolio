import { sendMailReseaver, sendMailSender } from '@/utils/mails.utils';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  console.log('name', name, 'sender', email, 'message', message);
  try {
    sendMailReseaver({ name, sender: email, message });
    sendMailSender({ name, sender: email, message });
    return Response.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, message: 'Error sending email' });
  }
}
