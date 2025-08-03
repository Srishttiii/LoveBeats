function setMood(mood) {
  const quoteBox = document.getElementById('quoteBox');
  const audio = document.getElementById('player');

  let quote = "";
  let music = "";

  if (mood === 'crush') {
    quote = "That smile... it's dangerous.";
    music = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // sample
  } else if (mood === 'inlove') {
    quote = "You feel like home and adventure at once.";
    music = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
  } else if (mood === 'heartbreak') {
    quote = "Even shattered hearts still beat.";
    music = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";
  } else if (mood === 'obsession') {
    quote = "You're all I think about. All the time.";
    music = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3";
  }

  quoteBox.innerText = quote;
  audio.src = music;
  audio.play();
}
