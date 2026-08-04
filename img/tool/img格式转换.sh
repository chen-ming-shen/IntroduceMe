#!/bin/bash

MAX_WIDTH=600          # 最大宽度（按需改）
QUALITY=10              # 质量 0-100
OUTPUT_DIR="output"

mkdir -p "$OUTPUT_DIR"

for f in *.{jpg,jpeg,png,gif,bmp,tiff,webp}; do
    [ -f "$f" ] || continue
    name="${f%.*}"
    echo "转换: $f → ${OUTPUT_DIR}/${name}.webp"

    ffmpeg -i "$f" \
        -vf "scale='min(${MAX_WIDTH},iw)':-1" \
        -q:v "$QUALITY" \
        -preset photo \
        "${OUTPUT_DIR}/${name}.webp" -y
done

echo "完成！输出在 ${OUTPUT_DIR}/ 文件夹"
