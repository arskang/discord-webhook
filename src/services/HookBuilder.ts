import axios from 'axios';
import { rgxURL } from '../helpers/regexp';
import { DiscordMessage } from '../types';
import errors from '../helpers/errors';

export default class HookBuilder {
  private webhookURL: string;

  private discordMessages: DiscordMessage[] = [];

  constructor(url: string) {
    if (!rgxURL.test(url)) throw new Error(`${url} ${errors.urlError}`);
    this.webhookURL = url;
  }

  addMessage(message: DiscordMessage) {
    if (!message) throw new Error(errors.discordMessageError);
    this.discordMessages.push(message);
    return this;
  }

  send() {
    return Promise.all(this.discordMessages.map((message) => (
      axios.post(this.webhookURL, message)
    )));
  }
}
