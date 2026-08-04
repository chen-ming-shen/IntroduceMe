function load_article(url_article,tag){
    if(typeof url_article === "string"){
    fetch(url_article)
      .then(res => {
        if (!res.ok) throw new Error('文件读取失败');
        return res.text();
      })
      .then(md => {
        const el = document.getElementById(tag);
        if(!el) return ;
        el.innerHTML = marked.parse(md);
      })
      .catch(err => {
        document.getElementById(tag).innerHTML = `<p>加载失败：${err.message}</p>`;
      });
      }
      else return -1;
}
export { load_article };