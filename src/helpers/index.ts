import { rgxHexColor } from './regexp';
import e from './errors';

export function getDiscordColor(hexColor: string): number {
  if (!rgxHexColor.test(hexColor)) throw new Error(e.hexColorError);
  return parseInt(hexColor.replace(/^#/, ''), 16);
}

export default undefined;
