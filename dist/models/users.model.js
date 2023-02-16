"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = require("mongoose");
const userSchema = new _mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [
            'active',
            'pending',
            'inactive'
        ],
        default: 'pending'
    }
}, {
    timestamps: true
});
const userModel = (0, _mongoose.model)('User', userSchema);
const _default = userModel;

//# sourceMappingURL=users.model.js.map