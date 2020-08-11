// Your code goes here


const body = document.querySelector('body');

body.addEventListener('wheel', (e) => {
  body.style.backgroundColor = 'seagreen';
  });

  body.addEventListener('auxclick', (e) => {
      body.style.color = 'yellow';
  });

  const header = document.querySelector('header');

  header.addEventListener('dblclick', (e) => {
      e.stopPropagation();
    header.style.backgroundColor = 'orange';
    });


    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('mouseover', (e) => {
          link.style.font = "italic bold 20px arial,serif";
        });
        link.addEventListener('click', (e) => {
          e.preventDefault();
        })
      });

      const pics = document.querySelectorAll('img');

      document.querySelectorAll('img').forEach((image) => {
        image.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          image.style.transform = 'scale(1.2)';
        });
        image.addEventListener('mouseup', (e) => {
          e.stopPropagation();
          image.style.transform = 'scale(1)';
        });
      });
        
     document.addEventListener('keydown',(e) =>{
         console.log('Hi');
         if (e.keyCode === 70) {
            pics[3].style.transform = 'rotate(2deg)';
         } else if (e.keyCode === 74) {
            pics[3].style.transform = 'none'
         }
     });
        
    
        pics[3].addEventListener('mouseenter', () => {
            pics[3].style.border = 'thick dashed blue';
           });
           pics[3].addEventListener('mouseleave', () => {
             pics[3].style.border = 'none';
           }); 

           document.querySelectorAll('.btn').forEach((button) => {
               button.style.backgroundColor = 'black';
           });
           
           