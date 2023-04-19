import * as FormData from 'form-data';
import { DiscordMessage, MdList } from '../types';
export declare function getDiscordColor(hexColor: string): number;
export declare function convertToList(item: string | MdList): MdList;
export declare function getFormData(data: DiscordMessage): FormData;
