# Discord Webhook

#### Structure
- [Discord Webhooks Guide](https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html)

#### Unsupported
- tss
- allowed_mentions

#### Install
```
yarn add @arskang/discord-webhook
```

#### Types

- DiscordMessage
  - content?: string // Max 2000
  - embeds?: Embed[] // Max 10
  - attachments?: string[] // Max 10 
- Embed
  - title?: string // Max 256
  - description?: string // Max 4096
  - url?: string
  - color?: number
  - fields?: Field[] // Max 25
  - author?: Author
  - footer?: Footer
  - image?: Image
  - thumbnail?: Image
- Author
  - name?: string // Max 256
  - url?: string
  - icon_url?: string
- Field
  - name: string // Max 256
  - value: string // Max 1024
  - inline?: boolean
- Footer
  - text?: string // Max 2048
  - icon_url?: string
  - timestamp?: string // ISO string
- Image
  - url: string

#### EmbedBuilder

##### Methods:

- setTitle(title: string = ''): return this
- setDescription(description: string = ''): return this
- setUrl(url: string = ''): return this
- setColor(hexColor: string = ''): return this
- addField(field: Field): return this
- setAuthor(author: Author = {}): return this
- setFooter(footer: Footer = {}): return this
- setImage(url?: string): return this
- setThumbnail(url?: string): return this
- getJson(): return json string
- build(): return **Embed**

##### Example:

```js
const { EmbedBuilder } = require("@arskang/discord-webhook");

const embed = new EmbedBuilder()
  .setTitle("Buddy Daddies (English Dub) - Episode 12 - Daughter Daddies")
  .setColor("#fea800") // Hexadecimal
  .setUrl("http://www.crunchyroll.com/buddy-daddies/episode-12-daughter-daddies-896284")
  .setAuthor({
    name: "Mr. Cat",
    url: "https://www.reddit.com/r/cats/",
    icon_url: "https://i.imgur.com/R66g1Pe.jpg"
  })
  .setFooter({
    text: "Footer",
    timestamp: "2023-04-14T21:30:00.000Z",
  })
  .addField({ name: "Field 1", value: "ok" })
  .addField({ name: "Field 2", value: "ok" });

// Get json string
console.log(embed.getJson());
```

#### MessageBuilder

##### Methods:

- setContent(content: string = ''): return this
- addAttachment(attachment?: string): return this
- addEmbed(embed?: Embed): return this
- getJson(): return json string
- build(): return **DiscordMessage**

##### Example:

```js
const { MessageBuilder } = require("@arskang/discord-webhook");

const message = new MessageBuilder()
  .setContent("Content")
  .addEmbed(embed.build());

// Get json string
console.log(message.getJson());
```

#### HookBuilder

##### Methods:

- constructor(url: string, message: DiscordMessage): return this
- send(): return **axios response promise**

##### Example:

```js
const { HookBuilder } = require("@arskang/discord-webhook");

// return axios promise
new HookBuilder("DISCORD_WEBHOOK_URL", message.build()).send();
```