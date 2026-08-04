function createGallery(containerId, options = {}) {
  const {
    total = 0,
    ext = '.webp',
    folder = 'img/gallery/',
    altPrefix = '随机排列的图片 '
  } = options;
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  // 1. 生成随机不重复的图片顺序（文件名索引）
  const indices = Array.from({ length: total }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  const fragment = document.createDocumentFragment();
  const imgElements = [];
  for (let i = 0; i < total; i++) {
    const img = document.createElement('img');
    img.alt = altPrefix;
    img.loading = 'lazy';
    const div = document.createElement('div');
    div.appendChild(img);
    fragment.appendChild(div);
    imgElements.push(img);
  }

  container.appendChild(fragment);

  setTimeout(() => {
    imgElements.forEach((img, i) => {
      img.src = folder + indices[i] + ext;
    });
  }, 0);
}