"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const contentSchema = new _mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const contentModel = (0, _mongoose.model)('Content', contentSchema);
const _default = contentModel;

//# sourceMappingURL=content.model.js.map