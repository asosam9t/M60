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
    ContentDto: ()=>ContentDto,
    ContentSeriesDto: ()=>ContentSeriesDto,
    CreatSeriesDto: ()=>CreatSeriesDto
});
const _classValidator = require("class-validator");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let ContentDto = class ContentDto {
};
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], ContentDto.prototype, "title", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], ContentDto.prototype, "description", void 0);
let ContentSeriesDto = class ContentSeriesDto {
};
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], ContentSeriesDto.prototype, "title", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], ContentSeriesDto.prototype, "description", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], ContentSeriesDto.prototype, "series", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], ContentSeriesDto.prototype, "season", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], ContentSeriesDto.prototype, "episode", void 0);
let CreatSeriesDto = class CreatSeriesDto {
};
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], CreatSeriesDto.prototype, "title", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], CreatSeriesDto.prototype, "description", void 0);
__decorate([
    (0, _classValidator.IsString)(),
    __metadata("design:type", String)
], CreatSeriesDto.prototype, "category", void 0);

//# sourceMappingURL=content.dto.js.map