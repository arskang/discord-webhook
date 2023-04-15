"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var regexp_1 = require("../helpers/regexp");
var errors_1 = require("../helpers/errors");
var HookBuilder = /** @class */ (function () {
    function HookBuilder(url, message) {
        if (!regexp_1.rgxURL.test(url))
            throw new Error("".concat(url, " ").concat(errors_1.default.urlError));
        if (!message)
            throw new Error(errors_1.default.discordMessageError);
        this.webhookURL = url;
        this.discordMessage = message;
    }
    HookBuilder.prototype.send = function () {
        return axios_1.default.post(this.webhookURL, this.discordMessage);
    };
    return HookBuilder;
}());
exports.default = HookBuilder;
