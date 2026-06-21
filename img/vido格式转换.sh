#!/bin/bash
# 批量转换当前目录下所有mp4

for f in *.mp4; do
  ffmpeg -i "$f" \
    -c:v libx264 \
    -preset slow \
    -crf 24 \
    -vf "scale=720:-2" \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    "${f%.*}_web.mp4"
done
