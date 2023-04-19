"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var regexp_1 = require("../helpers/regexp");
var errors_1 = require("../helpers/errors");
var EmbedBuilder = /** @class */ (function () {
    function EmbedBuilder() {
        this.embed = {};
    }
    EmbedBuilder.prototype.isAllCharactersValid = function () {
        var _a, _b, _c, _d;
        var characters = (this.embed.title || '')
            + (this.embed.description || '')
            + (((_b = (_a = this.embed) === null || _a === void 0 ? void 0 : _a.author) === null || _b === void 0 ? void 0 : _b.name) || '')
            + (((_d = (_c = this.embed) === null || _c === void 0 ? void 0 : _c.footer) === null || _d === void 0 ? void 0 : _d.text) || '');
        if (this.embed.fields && this.embed.fields.length > 0) {
            characters += this.embed.fields.reduce(function (acc, _a) {
                var name = _a.name;
                return acc + name;
            }, '');
        }
        if (characters.length > 6000)
            throw new Error("sum of all characters in embed ".concat(errors_1.default.limit6000));
    };
    EmbedBuilder.prototype.setTitle = function (title) {
        if (title === void 0) { title = ''; }
        if (title.length > 256)
            throw new Error("title ".concat(errors_1.default.limit256));
        this.embed.title = title;
        return this;
    };
    EmbedBuilder.prototype.setDescription = function (description) {
        if (description === void 0) { description = ''; }
        if (description.length > 2048)
            throw new Error("description ".concat(errors_1.default.limit2048));
        this.embed.description = description;
        return this;
    };
    EmbedBuilder.prototype.setUrl = function (url) {
        if (url === void 0) { url = ''; }
        if (!regexp_1.rgxURL.test(url))
            throw new Error(errors_1.default.urlError);
        this.embed.url = url;
        return this;
    };
    EmbedBuilder.prototype.setColor = function (hexColor) {
        if (hexColor === void 0) { hexColor = ''; }
        this.embed.color = (0, helpers_1.getDiscordColor)(hexColor);
        return this;
    };
    EmbedBuilder.prototype.addField = function (field) {
        if (!field.name || !field.value)
            throw new Error('name and value is required');
        if (field.name && field.name.length > 256)
            throw new Error("name ".concat(errors_1.default.limit256));
        if (field.value && field.value.length > 1024)
            throw new Error("value ".concat(errors_1.default.limit1024));
        if (!this.embed.fields)
            this.embed.fields = [];
        if (this.embed.fields.length === 25)
            throw new Error("fields ".concat(errors_1.default.limit25));
        var inline = {};
        if (typeof field.inline === 'boolean')
            inline = { inline: field.inline };
        this.embed.fields.push(__assign({ name: field.name, value: field.value }, inline));
        return this;
    };
    EmbedBuilder.prototype.setAuthor = function (author) {
        if (author === void 0) { author = {}; }
        if (!author.name && !author.icon_url && !author.url)
            return this;
        if (author.name && author.name.length > 256)
            throw new Error("name ".concat(errors_1.default.limit256));
        if (author.url && !regexp_1.rgxURL.test(author.url))
            throw new Error("url ".concat(errors_1.default.urlError));
        if (author.icon_url && !regexp_1.rgxURL.test(author.icon_url))
            throw new Error("icon_url ".concat(errors_1.default.urlError));
        this.embed.author = { name: author.name, url: author.url, icon_url: author.icon_url };
        return this;
    };
    EmbedBuilder.prototype.setFooter = function (footer) {
        if (footer === void 0) { footer = {}; }
        if (!footer.text && !footer.icon_url && !footer.timestamp)
            return this;
        if (footer.text && footer.text.length > 2048)
            throw new Error("text ".concat(errors_1.default.limit2048));
        if (footer.icon_url && !regexp_1.rgxURL.test(footer.icon_url))
            throw new Error("icon_url ".concat(errors_1.default.urlError));
        if (footer.timestamp && !regexp_1.rgxISODateString.test(footer.timestamp)) {
            throw new Error(errors_1.default.timestampError);
        }
        if (footer.text || footer.icon_url) {
            this.embed.footer = { text: footer.text, icon_url: footer.icon_url };
        }
        this.embed.timestamp = footer.timestamp;
        return this;
    };
    EmbedBuilder.prototype.setImage = function (url, isAttachmentfile) {
        if (!url)
            return this;
        if (!isAttachmentfile && url && !regexp_1.rgxURL.test(url))
            throw new Error("url ".concat(errors_1.default.urlError));
        this.embed.image = {
            url: isAttachmentfile ? "attachment://".concat(url) : url,
        };
        return this;
    };
    EmbedBuilder.prototype.setThumbnail = function (url, isAttachmentfile) {
        if (!url)
            return this;
        if (url && !regexp_1.rgxURL.test(url))
            throw new Error("url ".concat(errors_1.default.urlError));
        this.embed.thumbnail = {
            url: isAttachmentfile ? "attachment://".concat(url) : url,
        };
        return this;
    };
    EmbedBuilder.prototype.getJson = function () {
        this.isAllCharactersValid();
        return JSON.stringify(this.embed);
    };
    EmbedBuilder.prototype.build = function () {
        this.isAllCharactersValid();
        return this.embed;
    };
    return EmbedBuilder;
}());
exports.default = EmbedBuilder;
