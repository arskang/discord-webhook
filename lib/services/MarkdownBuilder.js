"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var regexp_1 = require("../helpers/regexp");
var errors_1 = require("../helpers/errors");
var helpers_1 = require("../helpers");
var MarkdownBuilder = /** @class */ (function () {
    function MarkdownBuilder() {
        this.message = '';
    }
    MarkdownBuilder.prototype.getMessage = function () {
        return this.message;
    };
    MarkdownBuilder.prototype.lineBreak = function () {
        this.message = "".concat(this.message, "\n\n");
        return this;
    };
    MarkdownBuilder.prototype.bold = function (text) {
        this.message += MarkdownBuilder.bold(text);
        return this;
    };
    MarkdownBuilder.bold = function (text) {
        return "**".concat(text, "**");
    };
    MarkdownBuilder.prototype.italic = function (text) {
        this.message += MarkdownBuilder.italic(text);
        return this;
    };
    MarkdownBuilder.italic = function (text) {
        return "*".concat(text, "*");
    };
    MarkdownBuilder.prototype.underline = function (text) {
        this.message += MarkdownBuilder.underline(text);
        return this;
    };
    MarkdownBuilder.underline = function (text) {
        return "__".concat(text, "__");
    };
    MarkdownBuilder.prototype.strikethrough = function (text) {
        this.message += MarkdownBuilder.strikethrough(text);
        return this;
    };
    MarkdownBuilder.strikethrough = function (text) {
        return "~~".concat(text, "~~");
    };
    MarkdownBuilder.prototype.bigHeader = function (text) {
        this.message += MarkdownBuilder.bigHeader(text);
        return this;
    };
    MarkdownBuilder.bigHeader = function (text) {
        return "# ".concat(text, "\n");
    };
    MarkdownBuilder.prototype.smallerHeader = function (text) {
        this.message += MarkdownBuilder.smallerHeader(text);
        return this;
    };
    MarkdownBuilder.smallerHeader = function (text) {
        return "## ".concat(text, "\n");
    };
    MarkdownBuilder.prototype.evenSmallerHeader = function (text) {
        this.message += MarkdownBuilder.evenSmallerHeader(text);
        return this;
    };
    MarkdownBuilder.evenSmallerHeader = function (text) {
        return "### ".concat(text, "\n");
    };
    MarkdownBuilder.prototype.links = function (name, url) {
        this.message += MarkdownBuilder.links(name, url);
        return this;
    };
    MarkdownBuilder.links = function (name, url) {
        if (!regexp_1.rgxURL.test(url))
            throw new Error(errors_1.default.urlError);
        return "[".concat(name, "](").concat(url, ")");
    };
    MarkdownBuilder.prototype.list = function (list) {
        if (list === void 0) { list = []; }
        this.message += MarkdownBuilder.list(list);
        return this;
    };
    MarkdownBuilder.list = function (list) {
        if (list === void 0) { list = []; }
        var lc = list.map(function (l) { return (0, helpers_1.convertToList)(l); });
        var listMessage = lc.reduce(function (acc, info) {
            if (typeof info === 'string') {
                return "".concat(acc, "\n  - ").concat(info);
            }
            var items = '';
            if (info.items && Array.isArray(info.items)) {
                items = info.items.reduce(function (a, i) { return ("".concat(a, "\n  - ").concat(i)); }, '');
            }
            return "".concat(acc, "\n- ").concat(info.name).concat(items);
        }, '');
        return "".concat(listMessage, "\n");
    };
    MarkdownBuilder.prototype.codeBlocks = function (text, language) {
        this.message += MarkdownBuilder.codeBlocks(text, language);
        return this;
    };
    MarkdownBuilder.codeBlocks = function (text, language) {
        return "\n```".concat(language || '', "\n").concat(text, "\n```\n");
    };
    MarkdownBuilder.prototype.inlineBlockQuote = function (text) {
        this.message += MarkdownBuilder.inlineBlockQuote(text);
        return this;
    };
    MarkdownBuilder.inlineBlockQuote = function (text) {
        return "> ".concat(text, "\n");
    };
    MarkdownBuilder.prototype.blockQuotes = function (text) {
        this.message += MarkdownBuilder.blockQuotes(text);
        return this;
    };
    MarkdownBuilder.blockQuotes = function (text) {
        return ">>> ".concat(text, "\n");
    };
    MarkdownBuilder.prototype.spoiler = function (text) {
        this.message += MarkdownBuilder.spoiler(text);
        return this;
    };
    MarkdownBuilder.spoiler = function (text) {
        return "||".concat(text, "||");
    };
    MarkdownBuilder.prototype.channelTag = function (id) {
        this.message += MarkdownBuilder.channelTag(id);
        return this;
    };
    MarkdownBuilder.channelTag = function (id) {
        return "<#".concat(id, ">");
    };
    MarkdownBuilder.prototype.uroleTag = function (id) {
        this.message += MarkdownBuilder.uroleTag(id);
        return this;
    };
    MarkdownBuilder.uroleTag = function (id) {
        return "<@".concat(id, ">");
    };
    return MarkdownBuilder;
}());
exports.default = MarkdownBuilder;
