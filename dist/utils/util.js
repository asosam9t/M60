"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedPassword = exports.isEmpty = void 0;
const tslib_1 = require("tslib");
const generate_password_1 = tslib_1.__importDefault(require("generate-password"));
/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
const isEmpty = (value) => {
    if (value === null) {
        return true;
    }
    else if (typeof value !== 'number' && value === '') {
        return true;
    }
    else if (typeof value === 'undefined' || value === undefined) {
        return true;
    }
    else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
        return true;
    }
    else {
        return false;
    }
};
exports.isEmpty = isEmpty;
exports.generatedPassword = generate_password_1.default.generate({
    length: 10,
    numbers: true,
});
//# sourceMappingURL=util.js.map