"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contentSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const contentModel = (0, mongoose_1.model)('Content', contentSchema);
exports.default = contentModel;
//# sourceMappingURL=content.model.js.map