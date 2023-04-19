import { getDiscordColor } from '../helpers';
import { rgxISODateString, rgxURL } from '../helpers/regexp';
import {
  Embed, Author, Field, Footer,
} from '../types';
import e from '../helpers/errors';

export default class EmbedBuilder {
  private embed: Embed = {};

  private isAllCharactersValid(): void {
    let characters = (this.embed.title || '')
      + (this.embed.description || '')
      + (this.embed?.author?.name || '')
      + (this.embed?.footer?.text || '');
    if (this.embed.fields && this.embed.fields.length > 0) {
      characters += this.embed.fields.reduce<string>((acc, { name }) => acc + name, '');
    }
    if (characters.length > 6000) throw new Error(`sum of all characters in embed ${e.limit6000}`);
  }

  setTitle(title: string = '') {
    if (title.length > 256) throw new Error(`title ${e.limit256}`);
    this.embed.title = title;
    return this;
  }

  setDescription(description: string = '') {
    if (description.length > 2048) throw new Error(`description ${e.limit2048}`);
    this.embed.description = description;
    return this;
  }

  setUrl(url: string = '') {
    if (!rgxURL.test(url)) throw new Error(e.urlError);
    this.embed.url = url;
    return this;
  }

  setColor(hexColor: string = '') {
    this.embed.color = getDiscordColor(hexColor);
    return this;
  }

  addField(field: Field) {
    if (!field.name || !field.value) throw new Error('name and value is required');
    if (field.name && field.name.length > 256) throw new Error(`name ${e.limit256}`);
    if (field.value && field.value.length > 1024) throw new Error(`value ${e.limit1024}`);
    if (!this.embed.fields) this.embed.fields = [];
    if (this.embed.fields.length === 25) throw new Error(`fields ${e.limit25}`);
    let inline = {};
    if (typeof field.inline === 'boolean') inline = { inline: field.inline };
    this.embed.fields.push({
      name: field.name, value: field.value, ...inline,
    });
    return this;
  }

  setAuthor(author: Author = {}) {
    if (!author.name && !author.icon_url && !author.url) return this;
    if (author.name && author.name.length > 256) throw new Error(`name ${e.limit256}`);
    if (author.url && !rgxURL.test(author.url)) throw new Error(`url ${e.urlError}`);
    if (author.icon_url && !rgxURL.test(author.icon_url)) throw new Error(`icon_url ${e.urlError}`);

    this.embed.author = { name: author.name, url: author.url, icon_url: author.icon_url };
    return this;
  }

  setFooter(footer: Footer = {}) {
    if (!footer.text && !footer.icon_url && !footer.timestamp) return this;
    if (footer.text && footer.text.length > 2048) throw new Error(`text ${e.limit2048}`);
    if (footer.icon_url && !rgxURL.test(footer.icon_url)) throw new Error(`icon_url ${e.urlError}`);
    if (footer.timestamp && !rgxISODateString.test(footer.timestamp)) {
      throw new Error(e.timestampError);
    }
    if (footer.text || footer.icon_url) {
      this.embed.footer = { text: footer.text, icon_url: footer.icon_url };
    }
    this.embed.timestamp = footer.timestamp;
    return this;
  }

  setImage(url?: string, isAttachmentfile?: boolean) {
    if (!url) return this;
    if (!isAttachmentfile && url && !rgxURL.test(url)) throw new Error(`url ${e.urlError}`);
    this.embed.image = {
      url: isAttachmentfile ? `attachment://${url}` : url,
    };
    return this;
  }

  setThumbnail(url?: string, isAttachmentfile?: boolean) {
    if (!url) return this;
    if (url && !rgxURL.test(url)) throw new Error(`url ${e.urlError}`);
    this.embed.thumbnail = {
      url: isAttachmentfile ? `attachment://${url}` : url,
    };
    return this;
  }

  getJson(): string {
    this.isAllCharactersValid();
    return JSON.stringify(this.embed);
  }

  build(): Embed {
    this.isAllCharactersValid();
    return this.embed;
  }
}
