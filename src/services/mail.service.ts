import FormData from 'form-data';
import Mailgun from 'mailgun.js';

import { MAILGUN_SECRET } from '@config';

const mailgun = new Mailgun(FormData);

const mg = mailgun.client({
  username: 'api',
  key: MAILGUN_SECRET,
});

class MailService {
  public mg = mg;

  public async sendMail(subject: string, html: any, data: any): Promise<boolean> {
    const response = await mg.messages.create('mg.tialala.com', {
      from: 'emmanuelnwanochie247@gmail.com',
      to: data.email,
      subject: subject,
      html: html,
    });
    // logs any error
    if (response.message === 'Queued. Thank you.') {
      return true;
    } else {
      return false;
    }
  }
}

export default MailService;
