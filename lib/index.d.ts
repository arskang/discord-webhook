import { DiscordMessage } from './types/discord';
export default class DiscordWebhookBuilder {
    webhookURL: string;
    discordMessage?: DiscordMessage;
    constructor(url: string);
    createNewMessage(content: DiscordMessage): string;
    sendMessages(): Promise<import("axios").AxiosResponse<any, any>>;
}
