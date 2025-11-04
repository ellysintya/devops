const grid = document.getElementById("moviesGrid");
const search = document.getElementById("search");
let movies = [];
let currentFilter = 'all';

const BACKEND_URL = window.location.hostname === "localhost"
  ? "http://localhost:5000/movies"     
  : "http://backend:5000/movies";     

async function fetchMovies() {
  try {
    const res = await fetch(BACKEND_URL); 
    if (!res.ok) throw new Error("Failed to fetch movies");
    movies = await res.json();
    renderMovies();
  } catch (error) {
    console.error("Error fetching movies:", error);
    grid.innerHTML = "<p style='color:white;text-align:center;'>❌ Failed to load movies.</p>";
  }
}

function renderMovies() {
  const query = search.value.toLowerCase();
  grid.innerHTML = movies
    .filter(m => (currentFilter === 'all' || m.status === currentFilter))
    .filter(m => m.title.toLowerCase().includes(query))
    .map(m => `
      <div class="movie-card" style="background-image:url('${m.poster}')">
        <div class="overlay">
          <h3 class="movie-title">${m.title}</h3>
          <button class="trailer-button" onclick="goToTrailer(${m.id})">▶ Watch Trailer</button>
        </div>
      </div>
    `).join("");
}

function goToTrailer(id) {
  window.location.href = "trailer.html?id=" + id;
}

function filterMovies(type) {
  currentFilter = type;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filter-btn[onclick="filterMovies('${type}')"]`).classList.add('active');
  renderMovies();
}

search.addEventListener('input', renderMovies);
fetchMovies();
