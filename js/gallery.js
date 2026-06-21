function createGallery(containerId, options = {}) {    
    const {
        total = 0,
        ext = '.webp',
        folder = 'img/output/',
        altPrefix = '图片 '
    } = options;
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < total; i++) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = folder + i + ext;
        img.alt = altPrefix + i + ' 加载失败！';
        img.loading = 'lazy';
        div.appendChild(img);
        container.appendChild(div);
    }
}
 
