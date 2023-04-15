import { DiscordMessage, Embed, Parse } from '../types/discord';
export default class MessageBuilder {
    private message;
    setContent(content?: string): this;
    addAttachment(attachment?: string): this;
    addEmbed(embed?: Embed): this;
    setTTS(content?: string): this;
    setAllowedMentionsParse(parse?: Parse[]): this;
    setAllowedMentionsUsers(users?: string[]): this;
    setAllowedMentionsRoles(roles?: string[]): this;
    getJson(): string;
    build(): DiscordMessage;
}
