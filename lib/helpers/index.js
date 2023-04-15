"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDiscordColor = void 0;
var regexp_1 = require("./regexp");
var errors_1 = require("./errors");
function getDiscordColor(hexColor) {
    if (!regexp_1.rgxHexColor.test(hexColor))
        throw new Error(errors_1.default.hexColorError);
    return parseInt(hexColor.replace(/^#/, ''), 16);
}
exports.getDiscordColor = getDiscordColor;
exports.default = undefined;