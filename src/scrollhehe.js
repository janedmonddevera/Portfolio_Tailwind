

const bg = document.getElementById('header');
const home = document.getElementById('homediv');
const portfolio = document.getElementById('portfoliodiv');
const techstack = document.getElementById('techstackdiv');
const about = document.getElementById('aboutdiv');




    
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    bg.classList.add('bg-darkblue');

            bg.classList.remove('bg-blueish');
  } else {
    bg.classList.add('bg-blueish');

    bg.classList.remove('bg-darkblue');
  }

  
  
 
}
      
     