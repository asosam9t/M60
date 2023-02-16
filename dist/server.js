"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("@/app"));
const auth_route_1 = tslib_1.__importDefault(require("@routes/auth.route"));
const content_route_1 = tslib_1.__importDefault(require("./routes/content.route"));
const validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv"));
(0, validateEnv_1.default)();
const app = new app_1.default([new auth_route_1.default(), new content_route_1.default()]);
app.listen();
//# sourceMappingURL=server.js.map