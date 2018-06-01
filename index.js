"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
async function main() {
    const promise = Promise.resolve().then(() => __importStar(require('./lib')));
    const lib = await promise;
    console.info({ promise, lib });
    console.info(lib.foo());
}
main().then(() => console.info('ok'), err => console.error(err));
//# sourceMappingURL=index.js.map