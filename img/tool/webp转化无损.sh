#!/bin/bash
set -e

if ! command -v ffmpeg &>/dev/null; then
    echo "错误: 需要安装 ffmpeg"
    exit 1
fi

if [ $# -eq 0 ]; then
    echo "用法: $0 <文件1> <文件2> ..."
    echo "示例: $0 *.png *.jpg"
    exit 1
fi

SUPPORTED_EXT="png|jpg|jpeg|gif|bmp|tiff|tif|webp|ppm|pgm|pbm"

for file in "$@"; do
    if [ ! -f "$file" ]; then
        echo "跳过: 文件不存在 - $file"
        continue
    fi

    ext="${file##*.}"
    ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

    if echo "$ext_lower" | grep -qE "^($SUPPORTED_EXT)$"; then
        output="${file%.*}.webp"
        echo "转换: $file → $output"
        ffmpeg -y -i "$file" -lossless 1 "$output" 2>/dev/null && echo "完成" || echo "失败: $file"
    else
        echo "跳过: 不支持的类型 - $file"
    fi
done
