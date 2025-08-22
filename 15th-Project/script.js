const slides = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let slideI = 0;
document.addEventListener("DOMContentLoaded", initilizeSlider);

function initilizeSlider() {
    if (slides.length > 0) {
        slides[slideI].classList.add("displaySlide");
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideI = 0;
    } else if (index < 0) {
        slideI = slides.length - 1;
    } else {
        slideI = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideI].classList.add("displaySlide");
}

prev.addEventListener('click', () => {
    showSlide(slideI - 1);
});

next.addEventListener('click', ()=> {
    showSlide(slideI + 1);
});
