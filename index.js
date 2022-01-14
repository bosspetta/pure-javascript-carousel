const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;
let slidePosition = 0;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);
document.getElementById('autoplay-btn').addEventListener('click', autoPlay);
document.getElementById('stop-btn').addEventListener('click', stopCarousel);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

let transitionSlides = ''

function autoPlay() {
    console.log('Play please!');
    transitionSlides = setInterval(() => {
      moveToNextSlide();
    }, 5000);
}

function stopCarousel() {
    clearInterval(transitionSlides);
    console.log('Stop please!');
}

