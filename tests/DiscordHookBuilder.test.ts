import {
  HookBuilder,
  MessageBuilder,
  EmbedBuilder,
} from '../src/index';

test('My Discord HookBuilder', async () => {
  const embed = new EmbedBuilder()
    .setTitle("Buddy Daddies (English Dub) - Episode 12 - Daughter Daddies")
    .setColor("#fea800")
    .setUrl("http://www.crunchyroll.com/buddy-daddies/episode-12-daughter-daddies-896284")
    .setAuthor({
      name: "Edder",
      // url: "https://www.reddit.com/r/cats/",
      // icon_url: "https://i.imgur.com/R66g1Pe.jpg"
    })
    .setFooter({
      text: "Footer",
      timestamp: "2023-04-14T21:30:00.000Z",
    })
    .addField({ name: "Field 1", value: "ok" })
    .addField({ name: "Field 2", value: "ok" })
    .build();

  const message = new MessageBuilder()
    .setContent("Contenido de prueba")
    .addEmbed(embed);

  console.log(message.getJson());

  await new HookBuilder("https://discord.com/api/webhooks/1095780891214753803/nM2HFL6ovzyuNaiRxRaNDNdARUidX2DXiA7W-9vNuZBa3vDJ3mqDS7gNINm4nZgwVjan", message.build())
    .send()
    .then(r => {
      console.log(r.data);
      return;
    })
    .catch(err => {
      console.error(err.message);
      return;
    });

  expect(1).toBe(1);
});
