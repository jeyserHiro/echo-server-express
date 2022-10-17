"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = tslib_1.__importStar(require("express"));
const compression = tslib_1.__importStar(require("compression"));
const cors = tslib_1.__importStar(require("cors"));
const echo_route_1 = tslib_1.__importDefault(require("./echo-route"));
const app = express()
    .disable('x-powered-by')
    .use(express.json({ limit: '5mb' }))
    .use(express.urlencoded({ extended: false }))
    .use(compression())
    .use(cors())
    .options('*', cors())
    .use(echo_route_1.default);
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 1020;
const routeToMethod = (route) => Object.keys(route.methods)[0].toLocaleUpperCase();
app.listen(PORT, () => console.log(`🔊 Echo server started on port ${PORT}.\nTest at http://localhost:${PORT}
\nAvailable Routes: ${echo_route_1.default.stack.map((entry) => `\n 🔥 ${routeToMethod(entry.route)}: ${entry.route.path}`)}`));
//# sourceMappingURL=index.js.map