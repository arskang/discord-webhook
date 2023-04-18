"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regexp_1 = require("../helpers/regexp");
var errors_1 = require("../helpers/errors");
var MarkdownDiscordBuilder = /** @class */ (function () {
    function MarkdownDiscordBuilder() {
        this.message = '';
    }
    MarkdownDiscordBuilder.prototype.getMessage = function () {
        return this.message;
    };
    MarkdownDiscordBuilder.prototype.lineBreak = function () {
        this.message = "".concat(this.message, "\n\n");
        return this;
    };
    MarkdownDiscordBuilder.prototype.bold = function (text) {
        this.message += MarkdownDiscordBuilder.bold(text);
        return this;
    };
    MarkdownDiscordBuilder.bold = function (text) {
        return "**".concat(text, "**");
    };
    MarkdownDiscordBuilder.prototype.italic = function (text) {
        this.message += MarkdownDiscordBuilder.italic(text);
        return this;
    };
    MarkdownDiscordBuilder.italic = function (text) {
        return "*".concat(text, "*");
    };
    MarkdownDiscordBuilder.prototype.underline = function (text) {
        this.message += MarkdownDiscordBuilder.underline(text);
        return this;
    };
    MarkdownDiscordBuilder.underline = function (text) {
        return "__".concat(text, "__");
    };
    MarkdownDiscordBuilder.prototype.strikethrough = function (text) {
        this.message += MarkdownDiscordBuilder.strikethrough(text);
        return this;
    };
    MarkdownDiscordBuilder.strikethrough = function (text) {
        return "~~".concat(text, "~~");
    };
    MarkdownDiscordBuilder.prototype.bigHeader = function (text) {
        this.message += MarkdownDiscordBuilder.bigHeader(text);
        return this;
    };
    MarkdownDiscordBuilder.bigHeader = function (text) {
        return "# ".concat(text);
    };
    MarkdownDiscordBuilder.prototype.smallerHeader = function (text) {
        this.message += MarkdownDiscordBuilder.smallerHeader(text);
        return this;
    };
    MarkdownDiscordBuilder.smallerHeader = function (text) {
        return "## ".concat(text);
    };
    MarkdownDiscordBuilder.prototype.evenSmallerHeader = function (text) {
        this.message += MarkdownDiscordBuilder.evenSmallerHeader(text);
        return this;
    };
    MarkdownDiscordBuilder.evenSmallerHeader = function (text) {
        return "### ".concat(text);
    };
    MarkdownDiscordBuilder.prototype.links = function (name, url) {
        this.message += MarkdownDiscordBuilder.links(name, url);
        return this;
    };
    MarkdownDiscordBuilder.links = function (name, url) {
        if (!regexp_1.rgxURL.test(url))
            throw new Error(errors_1.default.urlError);
        return "[".concat(name, "](").concat(url, ")");
    };
    MarkdownDiscordBuilder.prototype.list = function (list) {
        if (list === void 0) { list = []; }
        this.message += MarkdownDiscordBuilder.list(list);
        return this;
    };
    MarkdownDiscordBuilder.list = function (list) {
        if (list === void 0) { list = []; }
        return list.reduce(function (acc, item) {
            if (Array.isArray(item)) {
                return item.reduce(function (a, i) { return ("".concat(a, "\n  - ").concat(i)); }, '');
            }
            return "".concat(acc, "\n- ").concat(item);
        }, '');
    };
    MarkdownDiscordBuilder.prototype.codeBlocks = function (text, language) {
        this.message += MarkdownDiscordBuilder.codeBlocks(text, language);
        return this;
    };
    MarkdownDiscordBuilder.codeBlocks = function (text, language) {
        return "```".concat(language || '', "\n").concat(text, "\n```");
    };
    MarkdownDiscordBuilder.prototype.blockQuotes = function (text) {
        this.message += MarkdownDiscordBuilder.blockQuotes(text);
        return this;
    };
    MarkdownDiscordBuilder.blockQuotes = function (text) {
        return ">>> ".concat(text, "\n\n");
    };
    MarkdownDiscordBuilder.prototype.spoiler = function (text) {
        this.message += MarkdownDiscordBuilder.spoiler(text);
        return this;
    };
    MarkdownDiscordBuilder.spoiler = function (text) {
        return "||".concat(text, "||");
    };
    return MarkdownDiscordBuilder;
}());
exports.default = MarkdownDiscordBuilder;
