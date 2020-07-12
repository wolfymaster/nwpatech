#!/usr/bin/env bash
docker_image_tag_name="red"

docker build --compress \
             --tag "$docker_image_tag_name" \
             .