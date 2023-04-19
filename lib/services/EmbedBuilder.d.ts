import { Embed, Author, Field, Footer } from '../types';
export default class EmbedBuilder {
    private embed;
    private isAllCharactersValid;
    setTitle(title?: string): this;
    setDescription(description?: string): this;
    setUrl(url?: string): this;
    setColor(hexColor?: string): this;
    addField(field: Field): this;
    setAuthor(author?: Author): this;
    setFooter(footer?: Footer): this;
    setImage(url?: string, isAttachmentfile?: boolean): this;
    setThumbnail(url?: string, isAttachmentfile?: boolean): this;
    getJson(): string;
    build(): Embed;
}
