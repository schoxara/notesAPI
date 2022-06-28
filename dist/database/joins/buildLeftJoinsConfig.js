"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueLeftJoinId = exports.buildLeftJoinsConfig = void 0;
const buildLeftJoinsConfig = (Type, alias, config, getUniqueidArg) => {
    const getUniqueId = getUniqueidArg || exports.getUniqueLeftJoinId.bind({});
    return Object.keys(config).reduce((acc, key, index) => {
        const newAliasName = `${key}${getUniqueId()}`;
        return Object.assign(Object.assign(Object.assign({}, acc), { [newAliasName]: `${alias}.${key}` }), (0, exports.buildLeftJoinsConfig)(Type, newAliasName, config[key], getUniqueId));
    }, {});
};
exports.buildLeftJoinsConfig = buildLeftJoinsConfig;
const getUniqueLeftJoinId = function () {
    return (this.count = (this.count || 0) + 1);
};
exports.getUniqueLeftJoinId = getUniqueLeftJoinId;
//# sourceMappingURL=buildLeftJoinsConfig.js.map