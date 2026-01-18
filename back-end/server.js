
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
// const PORT = 3000;

app.use(cors());

const movies = [
  { id: 1, title: "The Nutcracker 2", year: "2024", poster: "https://lumiere-a.akamaihd.net/v1/images/nutcracker-and-the-four-realms-poster_8824b113.jpeg", desc: "A magical sequel exploring new realms beyond imagination.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 2, title: "Little Mermaid", year: "2023", poster: "https://lumiere-a.akamaihd.net/v1/images/poster-id-payoff_ce62087b.jpeg", desc: "A mermaid trades her voice to live on land and find true love.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 3, title: "Encanto", year: "2021", poster: "https://lumiere-a.akamaihd.net/v1/images/encanto-id-poster_b0f0a082.jpeg", desc: "Mirabel must save her family's magic before it fades away.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 4, title: "Elemental Forces of Nature", year: "2023", poster: "https://lumiere-a.akamaihd.net/v1/images/elemental-poster-id_8425eb19.jpeg", desc: "Fire meets water in a city where elements live together.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 5, title: "Raya and The Last Dragon", year: "2021", poster: "https://lumiere-a.akamaihd.net/v1/images/character_poster_04_402f583b.jpeg", desc: "Raya sets out to find the last dragon to save her kingdom.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 6, title: "Leroy & Stitch", year: "2006", poster: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1loqhq0_38866eec.jpeg", desc: "Lilo and Stitch must stop a new experiment gone wrong.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 7, title: "Incredibles 2", year: "2018", poster: "https://lumiere-a.akamaihd.net/v1/images/poster-incinemas-now-en_042a3924.jpeg", desc: "The superhero family returns with even more action and heart.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 8, title: "Aladdin", year: "2019", poster: "https://lumiere-a.akamaihd.net/v1/images/aladdin-movie-poster_63150511.jpeg", desc: "A street rat discovers a magic lamp and a whole new world.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 9, title: "Toy Story 4", year: "2019", poster: "https://lumiere-a.akamaihd.net/v1/images/toystory4-poster_6b94390a.jpeg", desc: "Woody and Buzz embark on a new adventure with Forky.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 10, title: "Avatar: The Way of Water", year: "2022", poster: "https://lumiere-a.akamaihd.net/v1/images/avatar-wayofwater-id_afe7ec94.jpeg?region=0%2C0%2C600%2C900", desc: "Jake Sully lives with his family in Pandora’s oceans.", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 11, title: "Turning Red", year: "2022", poster: "https://lumiere-a.akamaihd.net/v1/images/turning-red-dplus-poster-hotstar-id_6e493d5c.jpeg", desc: "A teen girl transforms into a giant red panda when she gets excited!", trailer: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" }
];

// const frontendPath = path.join(__dirname, '..', 'front-end'); 

// app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  // res.sendFile(path.join(frontendPath, 'menu.html'));
  res.send("🎬 Movie API is running successfully!");
});


app.get("/movies", (req, res) => {
  res.json(movies);
});


app.get("/movies/:id", (req, res) => {
  const movie = movies.find(m => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.json(movie);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

