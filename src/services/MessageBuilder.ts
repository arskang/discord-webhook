import { DiscordMessage, Embed, Parse } from '../types/discord';
import { rgxURL } from '../helpers/regexp';
import e from '../helpers/errors';

export default class MessageBuilder {
  private message: DiscordMessage = {};

  setContent(content: string = '') {
    if (content.length > 2000) throw new Error(`content ${e.limit2000}`);
    this.message.content = content;
    return this;
  }

  addAttachment(attachment?: string) {
    if (!attachment) return this;
    if (!rgxURL.test(attachment)) throw new Error(e.urlError);
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
