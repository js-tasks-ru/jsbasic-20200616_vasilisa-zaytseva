import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    
    let elem = document.createElement('div');
    elem.className = 'carousel';
    
    let carouselInner = document.createElement('div');
    elem.appendChild(carouselInner);
    carouselInner.className = 'carousel__inner';

    let arrowRight = document.createElement('div');
    elem.appendChild(arrowRight);
    arrowRight.className = 'carousel__arrow carousel__arrow_right';

    let img3 = document.createElement('img');
    arrowRight.appendChild(img3);
    img3.setAttribute('src', '/assets/images/icons/angle-icon.svg');
    img3.setAttribute('alt', 'icon');

    let arrowLeft = document.createElement('div');
    elem.appendChild(arrowLeft);
    arrowLeft.className = 'carousel__arrow carousel__arrow_left';

    let img4 = document.createElement('img');
    arrowLeft.appendChild(img4);
    img4.setAttribute('src', '/assets/images/icons/angle-left-icon.svg');
    img4.setAttribute('alt', 'icon');


    for (let slide of slides) {

      let carouselSlide = document.createElement('div');
      carouselInner.appendChild(carouselSlide);
      carouselSlide.className = 'carousel__slide';
      carouselSlide.setAttribute('data-id', `${slide.id}`);

      let img = document.createElement('img');
      carouselSlide.appendChild(img);
      img.setAttribute('src', `/assets/images/carousel/${slide.image}`);
      img.className = 'carousel__img';
      img.setAttribute('alt', 'slide');
      
      let carouselCaption = document.createElement('div');
      carouselSlide.appendChild(carouselCaption);
      carouselCaption.className = 'carousel__caption';

      let span = document.createElement('span');
      carouselCaption.appendChild(span);
      span.className = 'carousel__price';
      span.innerHTML = `€${slide.price.toFixed(2)}`;

      let carouselTitle = document.createElement('div');
      carouselCaption.appendChild(carouselTitle);
      carouselTitle.className = 'carousel__title';
      carouselTitle.innerHTML = `${slide.name}`;
      
      let button = document.createElement('button');
      carouselCaption.appendChild(button);
      button.setAttribute('type', 'button');
      button.className = 'carousel__button';

      let img2 = document.createElement('img');
      button.appendChild(img2);
      img2.setAttribute('src', '/assets/images/icons/plus-icon.svg');
      img2.setAttribute('alt', 'icon');
      const slideId = slide.id;

      button.addEventListener('click', () => {
        let event = new CustomEvent("product-add", { 
          detail: slideId, 
          bubbles: true 
        });
        elem.dispatchEvent(event);
      });
    }


    carouselInner.setAttribute('image_offset', 0);
    const length = slides.length;
    arrowRight.style.display = '';
    arrowLeft.style.display = 'none';

    arrowRight.addEventListener('click', ()  => { 
      let imageOffset = +carouselInner.getAttribute('image_offset');
      arrowLeft.style.display = '';
      if (imageOffset < (length - 1)){
        let px = carouselInner.offsetWidth * (imageOffset + 1);
        carouselInner.style.transform = `translateX(-${px}px)`;
        carouselInner.setAttribute('image_offset', imageOffset + 1);
        if (imageOffset == (length - 2)) {
          arrowRight.style.display = 'none';
        }
      }
    }); 
  
    arrowLeft.addEventListener('click', ()  => { 
      let imageOffset = +carouselInner.getAttribute('image_offset');
      if (imageOffset > 0) {
        arrowRight.style.display = '';
        let px = carouselInner.offsetWidth * (imageOffset - 1);
        carouselInner.style.transform = `translateX(-${px}px)`;
        carouselInner.setAttribute('image_offset', imageOffset - 1);
      }
      if (imageOffset == 1) {
        arrowLeft.style.display = 'none';
      }
    });
    this.elem = elem;
  }
}
