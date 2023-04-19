import axios from 'axios';
import { rgxURL } from '../helpers/regexp';
import { DiscordMessage } from '../types';
import errors from '../helpers/errors';
import { getFormData } from '../helpers';

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
    return Promise.all(this.discordMessages.map((message) => {
      if (message.attachments && message.attachments.length > 0) {
        const formdata = getFormData(message);
        return axios.post(this.webhookURL, formdata);
      }
      return axios.post(this.webhookURL, message);
    }));
  }
}
