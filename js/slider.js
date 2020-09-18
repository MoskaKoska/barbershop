var slides = document.querySelectorAll('.slider', '.slider__list', '.slider__item');
var currentSlide = 0;
var slideInerval = setInterval(nextSlide,4000);

function nextSlide() {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slider__item showing';
};
