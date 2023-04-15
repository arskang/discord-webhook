import { DiscordMessage } from '../types/discord';
export default class HookBuilder {
    private webhookURL;
    private discordMessage;
    constructor(url: string, message: DiscordMessage);
    send(): Promise<import("axios").AxiosResponse<any, any>>;
}
