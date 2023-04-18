import { MdList } from '../types';
import { rgxURL } from '../helpers/regexp';
import e from '../helpers/errors';
import { convertToList } from '../helpers';

export default class MarkdownDiscordBuilder {
  private message: string = '';

  getMessage(): string {
    return this.message;
  }

  lineBreak() {
    this.message = `${this.message}

`;
    return this;
  }

  bold(text: string) {
    this.message += MarkdownDiscordBuilder.bold(text);
    return this;
  }

  static bold(text: string): string {
    return `**${text}**`;
  }

  italic(text: string) {
    this.message += MarkdownDiscordBuilder.italic(text);
    return this;
  }

  static italic(text: string): string {
    return `*${text}*`;
  }

  underline(text: string) {
    this.message += MarkdownDiscordBuilder.underline(text);
    return this;
  }

  static underline(text: string): string {
    return `__${text}__`;
  }

  strikethrough(text: string) {
    this.message += MarkdownDiscordBuilder.strikethrough(text);
    return this;
  }

  static strikethrough(text: string): string {
    return `~~${text}~~`;
  }

  bigHeader(text: string) {
    this.message += MarkdownDiscordBuilder.bigHeader(text);
    return this;
  }

  static bigHeader(text: string): string {
    return `# ${text}
`;
  }

  smallerHeader(text: string) {
    this.message += MarkdownDiscordBuilder.smallerHeader(text);
    return this;
  }

  static smallerHeader(text: string): string {
    return `## ${text}
`;
  }

  evenSmallerHeader(text: string) {
    this.message += MarkdownDiscordBuilder.evenSmallerHeader(text);
    return this;
  }

  static evenSmallerHeader(text: string): string {
    return `### ${text}
`;
  }

  links(name: string, url: string) {
    this.message += MarkdownDiscordBuilder.links(name, url);
    return this;
  }

  static links(name: string, url: string): string {
    if (!rgxURL.test(url)) throw new Error(e.urlError);
    return `[${name}](${url})`;
  }

  list(list: (string | MdList)[] = []) {
    this.message += MarkdownDiscordBuilder.list(list);
    return this;
  }

  static list(list: (string | MdList)[] = []): string {
    const lc = list.map((l) => convertToList(l));

    const listMessage = lc.reduce<string>((acc, info) => {
      if (typeof info === 'string') {
        return `${acc}
  - ${info}`;
      }
      let items = '';
      if (info.items && Array.isArray(info.items)) {
        items = info.items.reduce<string>((a, i) => (
          `${a}
  - ${i}`), '');
      }
      return `${acc}
- ${info.name}${items}`;
    }, '');
    return `${listMessage}
`;
  }

  codeBlocks(text: string, language?: string) {
    this.message += MarkdownDiscordBuilder.codeBlocks(text, language);
    return this;
  }

  static codeBlocks(text: string, language?: string): string {
    return `
\`\`\`${language || ''}
${text}
\`\`\`
`;
  }

  inlineBlockQuote(text: string) {
    this.message += MarkdownDiscordBuilder.inlineBlockQuote(text);
    return this;
  }

  static inlineBlockQuote(text: string): string {
    return `> ${text}
`;
  }

  blockQuotes(text: string) {
    this.message += MarkdownDiscordBuilder.blockQuotes(text);
    return this;
  }

  static blockQuotes(text: string): string {
    return `>>> ${text}
`;
  }

  spoiler(text: string) {
    this.message += MarkdownDiscordBuilder.spoiler(text);
    return this;
  }

  static spoiler(text: string): string {
    return `||${text}||`;
  }
}
