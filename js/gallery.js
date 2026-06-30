
function createGallery(containerId, options = {}) {
  const {
    total = 0,
    ext = '.webp',
    folder = 'img/output/',
    altPrefix = '图片 '
  } = options;
  const container = document.getElementById(containerId);
  if (!container) return;

  let loadedQuantity = 0;
  const batchSize = 40;

  // 加载一批随机不重复图片
  function loadBatch(start, end) {
    const remaining = end - start;
    const list = new Array(remaining).fill(1); // 1 表示还没用过
    let loaded = 0;
    while (loaded < remaining) {
      const idx = Math.floor(Math.random() * remaining);
      if (list[idx] === 1) {
        list[idx] = 0;
        const img = document.createElement('img');
        img.src = folder + (start + idx) + ext;
        img.alt = altPrefix + (start + idx);
        img.loading = 'lazy';
        const div = document.createElement('div');
        div.appendChild(img);
        container.appendChild(div);
        loaded++;
      }
    }
  }

  // 当前批次加载
  function loadNextBatch() {
    if (loadedQuantity >= total) return;
    const end = Math.min(loadedQuantity + batchSize, total);
    loadBatch(loadedQuantity, end);
    loadedQuantity = end;
  }

  // 初始加载第一批
  loadNextBatch();

  // 滚动到底部自动加载
  let busy = false;
  window.addEventListener('scroll', () => {
    if (busy || loadedQuantity >= total) return;
    const atBottom = document.documentElement.scrollHeight
      - window.innerHeight - window.scrollY < 50;
    if (atBottom) {
      busy = true;
      loadNextBatch();
      busy = false;
    }
  });
}
