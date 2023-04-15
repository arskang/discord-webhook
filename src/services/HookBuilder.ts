import axios from 'axios';
import { rgxURL } from '../helpers/regexp';
import { DiscordMessage } from '../types/discord';
import errors from '../helpers/errors';

export default class HookBuilder {
  private webhookURL: string;

  private discordMessage: DiscordMessage;

  constructor(url: string, message: DiscordMessage) {
    if (!rgxURL.test(url)) throw new Error(`${url} ${errors.urlError}`);
    if (!message) throw new Error(errors.discordMessageError);
    this.webhookURL = url;
    this.discordMessage = message;
  }

  send() {
    return axios.post(this.webhookURL, this.discordMessage);
  }
}
