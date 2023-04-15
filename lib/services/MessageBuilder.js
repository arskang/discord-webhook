"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regexp_1 = require("../helpers/regexp");
var errors_1 = require("../helpers/errors");
var MessageBuilder = /** @class */ (function () {
    function MessageBuilder() {
        this.message = {};
    }
    MessageBuilder.prototype.setContent = function (content) {
        if (content === void 0) { content = ''; }
        if (content.length > 2000)
            throw new Error("content ".concat(errors_1.default.limit2000));
        this.message.content = content;
        return this;
    };
    MessageBuilder.prototype.addAttachment = function (attachment) {
        if (!attachment)
            return this;
        if (!regexp_1.rgxURL.test(attachment))
            throw new Error(errors_1.default.urlError);
        if (!this.message.attachments)
            this.message.attachments = [];
        if (this.message.attachments.length === 10)
            throw new Error("attachments ".concat(errors_1.default.limit10));
        this.message.attachments.push(attachment);
        return this;
    };
    MessageBuilder.prototype.addEmbed = function (embed) {
        if (!embed)
            return this;
        if (!this.message.embeds)
            this.message.embeds = [];
        if (this.message.embeds.length === 10)
            throw new Error("embeds ".concat(errors_1.default.limit10));
        this.message.embeds.push(embed);
        return this;
    };
    MessageBuilder.prototype.getJson = function () {
        return JSON.stringify(this.message);
    };
    MessageBuilder.prototype.build = function () {
        return this.message;
    };
    return MessageBuilder;
}());
exports.default = MessageBuilder;
