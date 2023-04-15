// Generated by https://quicktype.io

export interface DiscordMessage {
  content?: string; // Max 2000
  embeds?: Embed[]; // Max 10
  attachments?: string[]; // Max 10
}

export interface Embed {
  title?: string; // Max 256
  description?: string; // Max 4096
  url?: string;
  color?: number;
  fields?: Field[]; // Max 25
  author?: Author;
  footer?: Footer;
  timestamp?: string; // ISO
  image?: Image;
  thumbnail?: Image;
}

export interface Author {
  name?: string; // Max 256
  url?: string;
  icon_url?: string;
}

export interface Field {
  name: string; // Max 256
  value: string; // Max 1024
  inline?: boolean;
}

export interface Footer {
  text?: string; // Max 2048
  icon_url?: string;
  timestamp?: string;
}

export interface Image {
  url: string;
}
