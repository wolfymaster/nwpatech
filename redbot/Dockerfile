FROM    python:3.7-slim

# Note: `mkdir` required to ensure JRE can be installed, dunno why
# https://github.com/nextcloud/docker/issues/380#issuecomment-409593925
RUN     mkdir -p /usr/share/man/man1mkdir -p /usr/share/man/man1
RUN     apt-get update && apt-get install --no-install-recommends \
        -y --auto-remove \
            build-essential \
            curl \
            default-jre \
            git \
            libbz2-dev \
            libffi-dev \
            liblzma-dev \
            libncurses5-dev \
            libncursesw5-dev \
            libreadline-dev \
            libsqlite3-dev \
            libssl-dev \
            llvm \
            make \
            tk-dev \
            unzip \
            wget \
            xz-utils \
            zlib1g-dev && rm -rf /var/lib/apt/lists/*
RUN     groupadd redbot && useradd -m -g redbot redbot

USER    redbot
ENV     PATH /home/redbot/.local/bin:$PATH
WORKDIR /home/redbot
RUN     pip install --user Red-DiscordBot[voice]
VOLUME  /home/redbot
CMD     ["/bin/bash"]

LABEL   org.label-schema.name="docker-red-discordbot" \
        org.label-schema.description="Red Discord Bot (V3) packaged as container image" \
        org.label-schema.version="0.1.1" \
        org.label-schema.vcs-url="https://github.com/addianto/docker-red-discordbot" \
        org.label-schema.vendor="@addianto" \
        org.label-schema.schema-version="1.0.0-rc1"