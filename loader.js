fetch('data/artigos.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('artigos-container');
    data.forEach(artigo => {
      const html = `
        <div class="artigo">
          <img src="assets/${artigo.imagem}" alt="${artigo.titulo}">
          <h2><a href="artigos/${artigo.slug}.html">${artigo.titulo}</a></h2>
          <p><small>${artigo.data}</small></p>
          <p>${artigo.resumo}</p>
        </div>`;
      container.innerHTML += html;
    });
  });