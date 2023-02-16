"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _formData = _interopRequireDefault(require("form-data"));
const _mailgunJs = _interopRequireDefault(require("mailgun.js"));
const _config = require("../config");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const mailgun = new _mailgunJs.default(_formData.default);
const mg = mailgun.client({
    username: 'api',
    key: _config.MAILGUN_SECRET
});
let MailService = class MailService {
    async sendMail(subject, html, data) {
        const response = await mg.messages.create('mg.tialala.com', {
            from: 'emmanuelnwanochie247@gmail.com',
            to: data.email,
            subject: subject,
            html: html
        });
        if (response.message === 'Queued. Thank you.') {
            return true;
        } else {
            return false;
        }
    }
    constructor(){
        this.mg = mg;
    }
};
const _default = MailService;

//# sourceMappingURL=mail.service.js.map