"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.url = void 0;
const _config_1 = require("@config");
exports.url = `mongodb+srv://${_config_1.DB_USERNAME}:${_config_1.DB_PASSWORD}@cluster0.oqnee.mongodb.net/faith-backend?retryWrites=true&w=majority`;
exports.dbConnection = {
    url: exports.url,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
};
//# sourceMappingURL=index.js.map