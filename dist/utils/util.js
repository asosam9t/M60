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
    isEmpty: ()=>isEmpty,
    generatedPassword: ()=>generatedPassword
});
const _generatePassword = _interopRequireDefault(require("generate-password"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const isEmpty = (value)=>{
    if (value === null) {
        return true;
    } else if (typeof value !== 'number' && value === '') {
        return true;
    } else if (typeof value === 'undefined' || value === undefined) {
        return true;
    } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
        return true;
    } else {
        return false;
    }
};
const generatedPassword = _generatePassword.default.generate({
    length: 10,
    numbers: true
});

//# sourceMappingURL=util.js.map