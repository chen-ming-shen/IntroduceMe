async function loadModule(id, filePath) {
  const resp = await fetch(filePath);
  const html = await resp.text();
  document.getElementById(id).innerHTML = html;
}
loadModule('忧郁', '../../SuzumiyaHaruhi/忧郁/_Suzumiya-Haruhi.html');
loadModule('叹息', '../../SuzumiyaHaruhi/叹息/_Suzumiya-Haruhi.html');
loadModule('烦闷', '../../SuzumiyaHaruhi/烦闷/_Suzumiya-Haruhi.html');
