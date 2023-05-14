var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var helpers_exports = {};
__export(helpers_exports, {
  hashPasswordIfProvided: () => hashPasswordIfProvided
});
module.exports = __toCommonJS(helpers_exports);
var import_bcryptjs = __toESM(require("bcryptjs"));
const hashPasswordIfProvided = /* @__PURE__ */ __name(async (user) => {
  if (!user.password) {
    return user;
  }
  if (user.password.match(/^\$2[ayb]\$.{56}$/)) {
    return user;
  }
  const hashedPassword = await import_bcryptjs.default.hash(user.password, 10);
  const newUser = { ...user, password: hashedPassword };
  return newUser;
}, "hashPasswordIfProvided");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  hashPasswordIfProvided
});
//# sourceMappingURL=index.js.map
