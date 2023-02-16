"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const mailgun_js_1 = tslib_1.__importDefault(require("mailgun.js"));
const _config_1 = require("@config");
const mailgun = new mailgun_js_1.default(form_data_1.default);
const mg = mailgun.client({
    username: 'api',
    key: _config_1.MAILGUN_SECRET,
});
class MailService {
    constructor() {
        this.mg = mg;
    }
    async sendMail(subject, html, data) {
        const response = await mg.messages.create('mg.tialala.com', {
            from: 'emmanuelnwanochie247@gmail.com',
            to: data.email,
            subject: subject,
            html: html,
        });
        // logs any error
        if (response.message === 'Queued. Thank you.') {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = MailService;
//# sourceMappingURL=mail.service.js.map