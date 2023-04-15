import { DiscordMessage, Embed } from '../types/discord';
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

  getJson(): string {
    return JSON.stringify(this.message);
  }

  build(): DiscordMessage {
    return this.message;
  }
}
