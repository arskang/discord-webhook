import * as FormData from 'form-data';
import { DiscordMessage, MdList } from '../types';
import { rgxHexColor } from './regexp';
import e from './errors';

export function getDiscordColor(hexColor: string): number {
  if (!rgxHexColor.test(hexColor)) throw new Error(e.hexColorError);
  return parseInt(hexColor.replace(/^#/, ''), 16);
}

export function convertToList(item: string | MdList): MdList {
  if (item instanceof Object) {
    return item as MdList;
  }
  return { name: item };
}

export function getFormData(data: DiscordMessage): FormData {
  const form = new FormData();
  const { attachments, ...rest } = data;
  if (attachments && attachments.length > 0) {
    attachments.forEach((d, i) => {
      form.append(`file${i + 1}`, d.data, {
        filename: d.name,
      });
    });
  }
  form.append('payload_json', JSON.stringify(rest));
  return form;
}
