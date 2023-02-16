"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatSeriesDto = exports.ContentSeriesDto = exports.ContentDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class ContentDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentDto.prototype, "description", void 0);
exports.ContentDto = ContentDto;
class ContentSeriesDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentSeriesDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentSeriesDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentSeriesDto.prototype, "series", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentSeriesDto.prototype, "season", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], ContentSeriesDto.prototype, "episode", void 0);
exports.ContentSeriesDto = ContentSeriesDto;
class CreatSeriesDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreatSeriesDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreatSeriesDto.prototype, "description", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreatSeriesDto.prototype, "category", void 0);
exports.CreatSeriesDto = CreatSeriesDto;
//# sourceMappingURL=content.dto.js.map