# Discord Webhook

#### Structure
- [Discord Webhooks Guide](https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html)

#### Install
```
yarn add @arskang/discord-webhook
```

#### Types

- DiscordMessage
  - content?: string // Max 2000
  - embeds?: Embed[] // Max 10
  - attachments?: string[] // Max 10
  - tts?: TTS
  - allowed_mentions?: AllowedMentions
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
- TTS
  - content: string
  - tts: boolean
- AllowedMentions
  - parse?: Parse[] // everyone, users o roles
  - users?: string[]
  - roles?: string[]
- Parse (enum): everyone, users o roles

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
  .setImage("https://img1.ak.crunchyroll.com/i/spire3-tmb/34be63a102d3e6947dfbcc477d99074f1681503912_thumb.jpg")
  .setThumbnail("https://img1.ak.crunchyroll.com/i/spire3-tmb/34be63a102d3e6947dfbcc477d99074f1681503912_thumb.jpg")
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
// {
//   "title": "Buddy Daddies (English Dub) - Episode 12 - Daughter Daddies",
//   "color": 16689152,
//   "image": {
//     "url": "https://img1.ak.crunchyroll.com/i/spire3-tmb/34be63a102d3e6947dfbcc477d99074f1681503912_thumb.jpg"
//   },
//   "thumbnail": {
//     "url": "https://img1.ak.crunchyroll.com/i/spire3-tmb/34be63a102d3e6947dfbcc477d99074f1681503912_thumb.jpg"
//   },
//   "url": "http://www.crunchyroll.com/buddy-daddies/episode-12-daughter-daddies-896284",
//   "author": {
//     "name": "Mr. Cat",
//     "url": "https://www.reddit.com/r/cats/",
//     "icon_url": "https://i.imgur.com/R66g1Pe.jpg"
//   },
//   "footer": {
//     "text": "Footer"
//   },
//   "timestamp": "2023-04-14T21:30:00.000Z",
//   "fields": [
//     {
//       "name": "Field 1",
//       "value": "ok"
//     },
//     {
//       "name": "Field 2",
//       "value": "ok"
//     }
//   ]
// }
```

#### MessageBuilder

##### Methods:

- setContent(content: string = ''): return this
- addAttachment(attachment?: string): return this
- addEmbed(embed?: Embed): return this
- setTTS(content?: string): return this
- setAllowedMentionsParse(parse?: Parse[]): return this
- setAllowedMentionsUsers(users?: string[]): return this
- setAllowedMentionsRoles(roles?: string[]): return this
- getJson(): return json string
- build(): return **DiscordMessage**

##### Example:

```js
const { MessageBuilder } = require("@arskang/discord-webhook");

const message = new MessageBuilder()
  .setContent("Content @everyone")
  .setAllowedMentionsParse([Parse.everyone])
  .addEmbed(embed.build());

// Get json string
console.log(message.getJson());
// {
//   "content": "Content @everyone",
//   "allowed_mentions": { "parse": ["everyone"] },
//   "embeds": [
//     {
//       "title": "Buddy Daddies (English Dub) - Episode 12 - Daughter Daddies",
//       "color": 16689152,
//       "image": {
//         "url": "https://img1.ak.crunchyroll.com/i/spire3-tmb/34be63a102d3e6947dfbcc477d99074f1681503912_thumb.jpg"
//       },
//       "thumbnail": {
//         "url": "https://img1.ak.crunchyroll.com/i/spire3-tmb/34be63a102d3e6947dfbcc477d99074f1681503912_thumb.jpg"
//       },
//       "url": "http://www.crunchyroll.com/buddy-daddies/episode-12-daughter-daddies-896284",
//       "author": {
//         "name": "Mr. Cat",
//         "url": "https://www.reddit.com/r/cats/",
//         "icon_url": "https://i.imgur.com/R66g1Pe.jpg"
//       },
//       "footer": {
//         "text": "Footer"
//       },
//       "timestamp": "2023-04-14T21:30:00.000Z",
//       "fields": [
//         {
//           "name": "Field 1",
//           "value": "ok"
//         },
//         {
//           "name": "Field 2",
//           "value": "ok"
//         }
//       ]
//     },
//   ]
// }
```

#### HookBuilder

##### Methods:

- constructor(url: string, message: DiscordMessage): return this
- send(): return **axios (array) response promise**

##### Example:

```js
const { HookBuilder } = require("@arskang/discord-webhook");

// axios (array) response promise
try {
  const hook = new HookBuilder("DISCORD_WEBHOOK_URL");

  const allResponse = await hook
    .addMessage(message.build())
    .send();

  allResponse.forEach(({ data }) => console.log(data));
} catch({ message }) {
  console.error(message);
}
```

##### Output:

![Output](./assets/output.png)
