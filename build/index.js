"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const echo_route_1 = tslib_1.__importDefault(require("./echo-route"));
const app = (0, express_1.default)()
    .disable('x-powered-by')
    .use(express_1.default.json({ limit: '5mb' }))
    .use(express_1.default.urlencoded({ extended: false }))
    .use((0, compression_1.default)())
    .use((0, cors_1.default)())
    .options('*', (0, cors_1.default)())
    .use(echo_route_1.default);
app.set('json spaces', 2);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 80;
const routeToMethod = (route) => Object.keys(route.methods)[0].toLocaleUpperCase();
app.listen(PORT, () => console.log(`🔊 Echo server has started on port ${PORT}.\nTest at http://localhost:${PORT}
\nAvailable Routes: ${echo_route_1.default.stack.map((entry) => `\n 🔥 ${routeToMethod(entry.route)}: ${entry.route.path}`)}`));
//# sourceMappingURL=index.js.map