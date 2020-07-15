function initCarousel() {
  
  const carousel = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const width = carousel.offsetWidth;

  carousel.setAttribute('image_offset', 0);
  arrowRight.style.display = '';
  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', ()  => { 
    let imageOffset = +carousel.getAttribute('image_offset');
    arrowLeft.style.display = '';
    if (imageOffset < 3){
      let px = width * (imageOffset + 1);
      carousel.style.transform = `translateX(-${px}px)`;
      carousel.setAttribute('image_offset', imageOffset + 1);
      if (imageOffset == 2) {
        arrowRight.style.display = 'none';
      }
    }
    }); 

  arrowLeft.addEventListener('click', ()  => { 
    let imageOffset = +carousel.getAttribute('image_offset');
    if (imageOffset > 0) {
      arrowRight.style.display = '';
      let px = width * (imageOffset - 1);
      carousel.style.transform = `translateX(-${px}px)`;
      carousel.setAttribute('image_offset', imageOffset - 1);
    }
    if (imageOffset == 1) {
      arrowLeft.style.display = 'none';
    }
  });
}
