"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTokenPaymentException = void 0;
const common_1 = require("@nestjs/common");
class ApiTokenPaymentException extends common_1.HttpException {
    constructor() {
        super('Token suggest payment is required', common_1.HttpStatus.PAYMENT_REQUIRED);
    }
}
exports.ApiTokenPaymentException = ApiTokenPaymentException;
//# sourceMappingURL=api-token-payement.exception.js.map