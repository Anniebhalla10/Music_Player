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
let progress= document.getElementById("progress");
let total_duration= document.getElementById("duration");
let total_currentTime=document.getElementById("current_time");
const progress_div= document.getElementById("progress_div")



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
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

//  progress bar js functionality

music.addEventListener("timeupdate", (event) => {
  const {currentTime, duration } = event.srcElement;
  let progress_time= (currentTime/duration)*100;
  progress.style.width= `${progress_time}%`;

  //  updating the total time of each song
  let minute_duration=Math.floor( duration/60);
  let sec_duration= Math.floor(duration%60);

  if(duration){
  total_duration.textContent= `${minute_duration}:${sec_duration}`
  }

  // current duration update
  let minute_current=Math.floor( currentTime/60);
  let sec_current= Math.floor(currentTime%60);
if(sec_current<10){
  sec_current=`0${sec_current}`
}
  total_currentTime.textContent= `${minute_current}:${sec_current}`
  
});

// if someone clicks on the progress bar

progress_div.addEventListener("click",(event)=>{
  const { duration}= music;
let move_progress= (event.offsetX/ event.srcElement.clientWidth) * duration;
music.currentTime=move_progress
});


music.addEventListener('ended', nextSong);

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
