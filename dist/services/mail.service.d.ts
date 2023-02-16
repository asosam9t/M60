declare class MailService {
    mg: import("mailgun.js/client").default;
    sendMail(subject: string, html: any, data: any): Promise<boolean>;
}
export default MailService;
