"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    url: ()=>url,
    dbConnection: ()=>dbConnection
});
const _config = require("../config");
const url = `mongodb+srv://${_config.DB_USERNAME}:${_config.DB_PASSWORD}@cluster0.oqnee.mongodb.net/faith-backend?retryWrites=true&w=majority`;
const dbConnection = {
    url,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
};

//# sourceMappingURL=index.js.map