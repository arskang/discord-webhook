# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2023-04-18

### Added

- DiscordFile
- WebhookSettings

### Changed

- Embed
  - description -> max limit 4096 to 2048
- DiscordMessage
  - [ADD] username?: string;
  - [ADD] avatar_url?: string;
- MessageBuilder
  - [ADD] overrideWebhook(settings: WebhookSettings = {})
  - addAttachment(attachment?: string) -> addAttachment(attachment?: DiscordFile)
- HookBuilder
  - send() -> when you have attachments the request need to send FormData
- MarkdownBuilder
  - channelTag
  - uroleTag
- EmbedBuilder
  - setImage(url?: string) -> setImage(url?: string, isAttachmentfile?: boolean)
  - setThumbnail(url?: string) -> setThumbnail(url?: string, isAttachmentfile?: boolean)
  - sum of all characters in embed limit is 6000
- Optimized example images

### Removed

  - lib/types/discord.d.ts
  - lib/types/discord.js

## [1.0.3] - 2023-04-17

### Added

- MarkdownBuilder

### Changed

- types/discord.ts -> types/index.ts

### Removed

- Moment
