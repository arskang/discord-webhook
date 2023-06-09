/// <reference types="node" />
import * as fs from 'fs';
export interface DiscordMessage {
    username?: string;
    avatar_url?: string;
    content?: string;
    embeds?: Embed[];
    attachments?: DiscordFile[];
    tts?: TTS;
    allowed_mentions?: AllowedMentions;
}
export interface DiscordFile {
    data: fs.ReadStream;
    name: string;
}
export interface WebhookSettings {
    username?: string;
    avatar_url?: string;
}
export interface Embed {
    title?: string;
    description?: string;
    url?: string;
    color?: number;
    fields?: Field[];
    author?: Author;
    footer?: Footer;
    timestamp?: string;
    image?: Image;
    thumbnail?: Image;
}
export interface Author {
    name?: string;
    url?: string;
    icon_url?: string;
}
export interface Field {
    name: string;
    value: string;
    inline?: boolean;
}
export interface Footer {
    text?: string;
    icon_url?: string;
    timestamp?: string;
}
export interface Image {
    url: string;
}
export interface TTS {
    content: string;
    tts: boolean;
}
export declare enum Parse {
    everyone = "everyone",
    users = "users",
    roles = "roles"
}
export interface AllowedMentions {
    parse?: Parse[];
    users?: string[];
    roles?: string[];
}
export interface MdList {
    name: string;
    items?: string[];
}
