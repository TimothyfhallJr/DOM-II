// Fun Bus Image
const busPic = document.querySelector( 'img');

audioObj = new Audio('media/busSound.wav');
busPic.addEventListener("click", e => {
   audioObj.play();
});

busPic.addEventListener('dblclick', e  => {
  audioObj.pause();
});

// header background Change 
const header = document.querySelector('header');

header.addEventListener("auxclick", e => {
  const curColour = header.style.backgroundColor;

  if (curColour === 'white') {
      header.style.backgroundColor = "seagreen";
  }
  else {
      header.style.backgroundColor = "white";
  }
});



// page load sound

const welcome = document.querySelector('h1')

newAudioObj = new Audio('media/welcome.wav');

welcome.addEventListener('mouseover', e => {
  newAudioObj.play(); 
});


// body scroll scale 


const body = document.querySelector('body');

body.addEventListener('wheel', () => {
  body.style.color = 'orangered';
  });

  // img changed 

  const pics = document.querySelectorAll('img');
  // console.log(pics);
  
 pics[3].addEventListener('mouseenter', () => {
   pics[3].style.border = 'thick dashed blue';
  });

  pics[3].addEventListener('mouseleave', () => {
    pics[3].style.border = 'none';
  }); 

  pics[3].addEventListener('keyup', (e) => {
    if (e.key === 'f') {
      pics[3].style.transform = 'rotate(2deg)';
    } else if (e.key === 'j') {
      pics[3].style.transform = 'none'
    }
  });
 
