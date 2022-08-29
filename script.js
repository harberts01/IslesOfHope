const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

var currentIndex = 1;

function setSlides(num) {
    displaySlides (currentIndex += num)
}

let displaySlides = num => {
    let x;
    let slides = document.getElementsByClassName('imageSlides');
    if(num > slides.length) {
        currentIndex = 1
    }
    if (num < 1) {
        currentIndex = slides.length
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display= 'none';
    }
    slides[currentIndex - 1].style.display = "block";
}

displaySlides(currentIndex);