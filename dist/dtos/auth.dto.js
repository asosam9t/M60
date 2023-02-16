"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresignUpDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class PresignUpDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], PresignUpDto.prototype, "email", void 0);
exports.PresignUpDto = PresignUpDto;
//# sourceMappingURL=auth.dto.js.map