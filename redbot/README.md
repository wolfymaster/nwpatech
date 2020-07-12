# Red Discord Bot (V3) Container Image

[![](https://images.microbadger.com/badges/image/addianto/docker-red-discordbot.svg)](https://microbadger.com/images/addianto/docker-red-discordbot "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/addianto/docker-red-discordbot.svg)](https://microbadger.com/images/addianto/docker-red-discordbot "Get your own version badge on microbadger.com")

This project provides a Docker container image that packages Red Discord Bot
(V3).

## How to Use

```bash
$ docker pull addianto/docker-red-discordbot:latest
$ docker volume create redbot-data
$ docker run -i -t --name redbot --mount 'type=volume,source=redbot-data,destination=/home/redbot' addianto/docker-red-discordbot:latest
  ## Execute following commands in the container
$ redbot-setup
  ## Follow through the initialisation wizard
  ## Note: Use JSON as storage backend
$ redbot <INSTANCE_NAME>
  ## Example: redbot bot
  ## Note: Provide the bot token, obtained from your [Discord Developer Portal](https://discordapp.com/developers/applications/) page
  ## CTRL-C once the bot has been successfully setup
$ docker container start redbot
$ docker exec -d redbot redbot <INSTANCE_NAME>
```

## Maintainers

- [@addianto](https://github.com/addianto)

## License

The [source code](https://github.com/Cog-Creators/Red-DiscordBot/) for the Red
Discord Bot itself is licensed under GNU GPL v3. The build configuration file
for creating the container image, including scripts in this project, are
licensed under [MIT](LICENSE) license.