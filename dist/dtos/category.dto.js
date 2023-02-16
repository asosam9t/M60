"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CategoryDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CategoryDto.prototype, "name", void 0);
exports.CategoryDto = CategoryDto;
//# sourceMappingURL=category.dto.js.map