import { DiscordMessage, Embed, Parse, WebhookSettings, DiscordFile } from '../types';
export default class MessageBuilder {
    private message;
    overrideWebhook(settings?: WebhookSettings): this;
    setContent(content?: string): this;
    addAttachment(attachment?: DiscordFile): this;
    addEmbed(embed?: Embed): this;
    setTTS(content?: string): this;
    setAllowedMentionsParse(parse?: Parse[]): this;
    setAllowedMentionsUsers(users?: string[]): this;
    setAllowedMentionsRoles(roles?: string[]): this;
    getJson(): string;
    build(): DiscordMessage;
}
