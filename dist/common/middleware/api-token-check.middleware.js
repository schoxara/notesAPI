"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTokenCheckMiddleware = void 0;
const api_token_payement_exception_1 = require("../exceptions/api-token-payement.exception");
class ApiTokenCheckMiddleware {
    use(req, res, next) {
        if (req.headers['api-token'] !== 'my-token') {
            throw new api_token_payement_exception_1.ApiTokenPaymentException();
        }
        next();
    }
}
exports.ApiTokenCheckMiddleware = ApiTokenCheckMiddleware;
//# sourceMappingURL=api-token-check.middleware.js.map