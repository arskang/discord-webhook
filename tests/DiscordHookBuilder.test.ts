import {
  HookBuilder,
  MessageBuilder,
  EmbedBuilder,
} from '../src/index';

test('My Discord HookBuilder', async () => {
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

  console.log(embed.getJson());

  const message = new MessageBuilder()
    .setContent("Content")
    .addEmbed(embed.build());

  console.log(message.getJson());

  // try {
  //   const hook = new HookBuilder("DISCORD_WEBHOOK_URL");

  //   const allResponse = await hook
  //     .addMessage(message.build())
  //     .send();

  //   allResponse.forEach(({ data }) => console.log(data));
  // } catch({ message }) {
  //   console.error(message);
  // }

  expect(1).toBe(1);
});
