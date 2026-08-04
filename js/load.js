async function loadModule(id, filePath) {
  const resp = await fetch(filePath);
  const html = await resp.text();
  document.getElementById(id).innerHTML = html;
}
loadModule('忧郁', '../../../novel/suzumiyaharuhi/melancholy/_content.html');
loadModule('叹息', '../../../novel/suzumiyaharuhi/sigh/_content.html');
loadModule('烦闷', '../../../novel/suzumiyaharuhi/boredom/_content.html');