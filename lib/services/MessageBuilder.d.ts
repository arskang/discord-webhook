import { DiscordMessage, Embed } from '../types/discord';
export default class MessageBuilder {
    private message;
    setContent(content?: string): this;
    addAttachment(attachment?: string): this;
    addEmbed(embed?: Embed): this;
    getJson(): string;
    build(): DiscordMessage;
}
