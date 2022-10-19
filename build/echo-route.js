"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const prettyjson = tslib_1.__importStar(require("prettyjson"));
const router = (0, express_1.Router)();
const RESET_TOKEN = '\x1b[0m';
const UNDERSCORE_TOKEN = '\x1b[4m';
const logSection = (name, payload) => {
    var _a;
    if (!payload || !((_a = Object.keys(payload)) === null || _a === void 0 ? void 0 : _a.length))
        return '';
    return `\n\n• ${name}:
${prettyjson.render(payload)}`;
};
const logRequest = (req) => {
    console.log(`\n\n🆕 NEW ${UNDERSCORE_TOKEN}${req.method.toLocaleUpperCase()}${RESET_TOKEN} REQUEST 🆕
    
• Path: ${req.path}
• Full Url: ${req.url}${logSection('Headers', req.headers)}${logSection('Query', req.query)}${logSection('Payload', req.body)}
`);
};
[
    'get',
    'post',
    'put',
    'patch',
    'delete',
    'copy',
    'head',
    'options',
    'purge',
    'lock',
    'unlock',
    'propfind',
].forEach((method) => {
    router[method]('/*', (req, res) => {
        logRequest(req);
        let payload = {
            request: {
                headers: req.headers,
                protocol: req.protocol,
                body: req.body,
                params: req.params,
                query: req.query,
                host: req.hostname,
                path: req.path,
                originalUrl: req.originalUrl,
                subdomains: req.subdomains,
            },
            success: true,
        };
        res.status(200).json(payload);
    });
});
exports.default = router;
//# sourceMappingURL=echo-route.js.map