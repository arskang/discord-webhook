import { DiscordMessage } from '../types';
export default class HookBuilder {
    private webhookURL;
    private discordMessages;
    constructor(url: string);
    addMessage(message: DiscordMessage): this;
    send(): Promise<import("axios").AxiosResponse<any, any>[]>;
}
