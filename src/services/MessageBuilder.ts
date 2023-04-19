import {
  DiscordMessage, Embed, Parse, WebhookSettings, DiscordFile,
} from '../types';
import { rgxURL } from '../helpers/regexp';
import e from '../helpers/errors';

export default class MessageBuilder {
  private message: DiscordMessage = {};

  overrideWebhook(settings: WebhookSettings = {}) {
    if (settings.username && settings.username.trim().length > 80) throw new Error(`username ${e.limit80}`);
    if (settings.avatar_url && !rgxURL.test(settings.avatar_url)) throw new Error(`avatar_url ${e.urlError}`);
    if (settings.username) this.message.username = settings.username;
    if (settings.avatar_url) this.message.avatar_url = settings.avatar_url;
    return this;
  }

  setContent(content: string = '') {
    if (content.length > 2000) throw new Error(`content ${e.limit2000}`);
    this.message.content = content;
    return this;
  }

  addAttachment(attachment?: DiscordFile) {
    if (!attachment) return this;
    if (!this.message.attachments) this.message.attachments = [];
    if (this.message.attachments.length === 10) throw new Error(`attachments ${e.limit10}`);
    this.message.attachments.push(attachment);
    return this;
  }

  addEmbed(embed?: Embed) {
    if (!embed) return this;
    if (!this.message.embeds) this.message.embeds = [];
    if (this.message.embeds.length === 10) throw new Error(`embeds ${e.limit10}`);
    this.message.embeds.push(embed);
    return this;
  }

  setTTS(content?: string) {
    if (!content) return this;
    this.message.tts = { content, tts: true };
    return this;
  }

  setAllowedMentionsParse(parse?: Parse[]) {
    if (!parse) return this;
    if (!this.message.allowed_mentions) this.message.allowed_mentions = {};
    this.message.allowed_mentions = {
      ...this.message.allowed_mentions,
      parse,
    };
    return this;
  }

  setAllowedMentionsUsers(users?: string[]) {
    if (!users) return this;
    if (!this.message.allowed_mentions) this.message.allowed_mentions = {};
    this.message.allowed_mentions = {
      ...this.message.allowed_mentions,
      users,
    };
    return this;
  }

  setAllowedMentionsRoles(roles?: string[]) {
    if (!roles) return this;
    if (!this.message.allowed_mentions) this.message.allowed_mentions = {};
    this.message.allowed_mentions = {
      ...this.message.allowed_mentions,
      roles,
    };
    return this;
  }

  getJson(): string {
    return JSON.stringify(this.message);
  }

  build(): DiscordMessage {
    return this.message;
  }
}
