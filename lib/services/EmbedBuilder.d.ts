import { Embed, Author, Field, Footer } from '../types';
export default class EmbedBuilder {
    private embed;
    setTitle(title?: string): this;
    setDescription(description?: string): this;
    setUrl(url?: string): this;
    setColor(hexColor?: string): this;
    addField(field: Field): this;
    setAuthor(author?: Author): this;
    setFooter(footer?: Footer): this;
    setImage(url?: string): this;
    setThumbnail(url?: string): this;
    getJson(): string;
    build(): Embed;
}
