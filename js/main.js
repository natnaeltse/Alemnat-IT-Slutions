const carousel = document.querySelectorAll ('.carousel');
const carouselContainer = document.querySelector ('.carousel-container');
const carouselIndex = document.querySelectorAll ('.carousel-index-div .carousel-index');

let counter = 0;

window.addEventListener('load', scrole);
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    document.querySelector('nav').classList.add ('nav-bg');
  } else {
    document.querySelector('nav').classList.remove ('nav-bg');
  }
})

carouselIndex.forEach (index => {
  index.addEventListener ('click', e => {
    let i = Number(index.id);
    indexCarousel (i);    
    carouselContainer.style.transform = 'translateX(' + -100/3 * i + '%)';
  })  
});

function indexCarousel (i) {
  if (i === 0) {
    carouselIndex[i].classList.add ('active');
    carouselIndex[1].classList.remove ('active');
    counter = 0;
  } 
  if (i === 1) {
    carouselIndex[i].classList.add ('active');
    carouselIndex[0].classList.remove ('active');
    counter = 1;
  }
}

function scrole () {  
  setInterval (() => {
    indexCarousel (counter);
    carouselContainer.style.transition = 'transform 1s ease-in-out';
      if (counter === 0) {
        carouselContainer.style.transition = 'none';
        carouselContainer.style.transform = 'translateX(' + -100/3 * counter + '%)';
        counter++;   
      } else if (counter === carousel.length - 1){    
        carouselContainer.style.transform = 'translateX(' + -100/3 * counter + '%)';
        if (carousel[counter].id === 'firstClone') {
          counter = 0;
          indexCarousel (counter);
        }
        return;
      } else {   
        carouselContainer.style.transform = 'translateX(' + -100/3 * counter + '%)';
        counter++;   
      }    
  }, 10000);
}

// ###############################################################
//                    Experties page
// ###############################################################
const webDesign = document.querySelector ('.experties .expert-slide #webDesign');
const software = document.querySelector ('.experties .expert-slide #software');

webDesign.addEventListener ('click', () => {
  webDesign.classList.toggle('alternate');
  software.classList.remove('alternate');    
})

software.addEventListener ('click', () => {
  webDesign.classList.remove('alternate');
  software.classList.toggle('alternate');    
})


//  Display more paragraph 

const moreP = document.querySelector ('.expert .more-p');
const moreBtn = document.querySelector ('.expert button');
moreBtn.addEventListener ('click', () => {
  moreP.classList.toggle('dis');
  if (moreP.classList.contains ('dis')) {
    moreBtn.textContent = 'HIDE';
  } else {
    moreBtn.textContent = 'MORE... >';
  }
  
});



// ###############################################################
//                    ham-icon
// ###############################################################

const hamIcon = document.querySelector ('.ham-icon');
const navLinks = document.querySelector ('.nav-div div');
const navLi = document.querySelectorAll ('.nav-div div ul li');

hamIcon.addEventListener ('click', () => {
  navLinks.classList.toggle('slide-down');
})

navLi.forEach (li => {
  li.addEventListener ('click', () => {
    if (navLinks.classList.contains('slide-down')) {
      navLinks.classList.remove('slide-down');
    }    
  })
})