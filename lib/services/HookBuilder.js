"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var regexp_1 = require("../helpers/regexp");
var errors_1 = require("../helpers/errors");
var helpers_1 = require("../helpers");
var HookBuilder = /** @class */ (function () {
    function HookBuilder(url) {
        this.discordMessages = [];
        if (!regexp_1.rgxURL.test(url))
            throw new Error("".concat(url, " ").concat(errors_1.default.urlError));
        this.webhookURL = url;
    }
    HookBuilder.prototype.addMessage = function (message) {
        if (!message)
            throw new Error(errors_1.default.discordMessageError);
        this.discordMessages.push(message);
        return this;
    };
    HookBuilder.prototype.send = function () {
        var _this = this;
        return Promise.all(this.discordMessages.map(function (message) {
            if (message.attachments && message.attachments.length > 0) {
                var formdata = (0, helpers_1.getFormData)(message);
                return axios_1.default.post(_this.webhookURL, formdata);
            }
            return axios_1.default.post(_this.webhookURL, message);
        }));
    };
    return HookBuilder;
}());
exports.default = HookBuilder;
