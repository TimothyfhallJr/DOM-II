// Fun Bus Image
const busPic = document.querySelector( 'img');

audioObj = new Audio('media/busSound.wav');
busPic.addEventListener("click", e => {
   audioObj.play();
});

busPic.addEventListener('dblclick', e  => {
  audioObj.pause();
});

// body  background Change 
const body = document.querySelector('body');

body.addEventListener("auxclick", e => {
  const curColour = document.body.style.backgroundColor;

  if (curColour === 'white') {
      document.body.style.backgroundColor = "seagreen";
  }
  else {
      document.body.style.backgroundColor = "white";
  }
});

