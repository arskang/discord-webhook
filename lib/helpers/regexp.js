"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgxHexColor = exports.rgxURL = exports.rgxISODateString = void 0;
exports.rgxISODateString = /^(\d{4})(-(\d{2}))??(-(\d{2}))??(T(\d{2}):(\d{2})(:(\d{2}))??(\.(\d+))??(([+-]{1}\d{2}:\d{2})|Z)??)??$/;
exports.rgxURL = /^[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
exports.rgxHexColor = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
