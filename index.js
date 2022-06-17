const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");

let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

//for pause
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

// CHanging the songssss next and previous

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

const songs = [
  {
    name: "music-1",
    title: "Until I found You",
    artist: "Stephen Sanchez",
  },
  {
    name: "music-2",
    title: "Home",
    artist: "Edith Whiskers",
  },
  {
    name: "music-3",
    title: "As it was",
    artist: "Harry Styles",
  },
];

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  img.src = `images/${songs.name}.jpg`;
};

let songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1) % songs.length;
    loadSong(songs[songIndex]);
  playMusic();

  };

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
