const INTERVAL = 9000;

const Slider = interval => {
  const slides = document.querySelectorAll('.slide');
  let intervalID = setInterval(nextSlide, interval);

  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    clearInterval(intervalID);
    intervalID = setInterval(nextSlide, interval);
  });
  document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    clearInterval(intervalID);
    intervalID = setInterval(nextSlide, interval);
  });

  intervalID = setInterval(nextSlide, interval);

  const nextSlide = () => {
    const current = document.querySelector('.current');
    current.firstElementChild.classList.remove('animation-paused');
    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('current');
    } else {
      slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
  };

  const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('animation-paused');
    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('current');
    } else {
      slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
  };
};

Slider(INTERVAL);
