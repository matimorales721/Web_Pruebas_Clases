function loadPartial(url, selector) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Error cargando ${url}`);
      return res.text();
    })
    .then(data => document.querySelector(selector).innerHTML = data)
    .catch(err => console.error(err));
}