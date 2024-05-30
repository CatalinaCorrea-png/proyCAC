//----------- TARJETAS -------------------
/// Fetch
function llamarAPItarjetas(page) {
  fetch(`${API_URL}/movie/popular?language=en-US&page=${page}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  })
  .then(response => response.json())
  // .then(data => console.log(data));
  .then(data => dibujarDatosTarjetas(data));
}
llamarAPItarjetas(1);

/// Creacion de obj
function dibujarDatosTarjetas(json) {
  const tarjetas = json.results.map(obj => Tarjetas(obj));
  document.querySelector('.tendencias .tendencias-cards').innerHTML = tarjetas.join('');
}

/// Creacion de Componente
function Tarjetas(obj) {
  return `
  <div class="movie_card">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina"
        src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="${obj.title}" />
       <h1>${obj.title}</h1>
      <h4>${obj.release_date}</h4>
      <span class="minutes">${obj.original_language}</span><!-- DURACION -->
      <p class="type">${obj.genre_ids.join(' ')}</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        ${obj.overview}
      </p>
    </div>
  </div>
  <div
   style="background: url('https://image.tmdb.org/t/p/w500/${obj.poster_path}');" class="blur_back"></div>
</div>
  `
}

llamarAPItarjetas(2);