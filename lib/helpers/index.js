"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormData = exports.convertToList = exports.getDiscordColor = void 0;
var FormData = require("form-data");
var regexp_1 = require("./regexp");
var errors_1 = require("./errors");
function getDiscordColor(hexColor) {
    if (!regexp_1.rgxHexColor.test(hexColor))
        throw new Error(errors_1.default.hexColorError);
    return parseInt(hexColor.replace(/^#/, ''), 16);
}
exports.getDiscordColor = getDiscordColor;
function convertToList(item) {
    if (item instanceof Object) {
        return item;
    }
    return { name: item };
}
exports.convertToList = convertToList;
function getFormData(data) {
    var form = new FormData();
    var attachments = data.attachments, rest = __rest(data, ["attachments"]);
    if (attachments && attachments.length > 0) {
        attachments.forEach(function (d, i) {
            form.append("file".concat(i + 1), d.data, {
                filename: d.name,
            });
        });
    }
    form.append('payload_json', JSON.stringify(rest));
    return form;
}
exports.getFormData = getFormData;
