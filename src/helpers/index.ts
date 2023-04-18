import { MdList } from '../types';
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
