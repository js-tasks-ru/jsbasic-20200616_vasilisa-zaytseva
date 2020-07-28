export default class StepSlider {
  constructor({ steps, value = 0 }) {

    let slider = document.createElement('div');
    slider.className += ' slider';

    let sliderThumb = document.createElement('div');
    slider.appendChild(sliderThumb);
    sliderThumb.className += ' slider__thumb';
    sliderThumb.style.left = '0%';

    let sliderValue = document.createElement('span');
    sliderThumb.appendChild(sliderValue);
    sliderValue.className += ' slider__value';
    sliderValue.innerHTML = value;

    let sliderProgress = document.createElement('div');
    slider.appendChild(sliderProgress);
    sliderProgress.className += ' slider__progress';
    sliderProgress.style.width = '0%';
    
    let sliderSteps = document.createElement('div');
    slider.appendChild(sliderSteps);
    sliderSteps.className += ' slider__steps';

    let sliderStepActive = document.createElement('span');
    sliderSteps.appendChild(sliderStepActive);
    sliderStepActive.className += ' slider__step-active';
    
    for (let i = 0; i < steps - 1; i++) {
      let span = document.createElement('span');
      sliderSteps.appendChild(span);
    }
    
    let thumb = slider.querySelector('.slider__thumb');
    
    thumb.ondragstart = () => false;

    function moveThumb (event) {

      let left = event.clientX - slider.getBoundingClientRect().left;
      let leftRelative;
      if (slider.offsetWidth == 0) {
        leftRelative = 0;
      } else {
        leftRelative = left / slider.offsetWidth;
      };
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      if (sliderValue.innerHTML != value) {
        sliderSteps.children[value].className += ' slider__step-active';
        sliderSteps.children[sliderValue.innerHTML].classList.remove('slider__step-active');
        sliderValue.innerHTML = value; 
      };
      let thumb = slider.querySelector('.slider__thumb');
      let progress = slider.querySelector('.slider__progress');
      let leftPercents = valuePercents;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      slider.dispatchEvent ( new CustomEvent('slider-change', { 
        detail: value, 
        bubbles: true 
       }));
    }

    thumb.onpointerdown = function(event) {

      event.preventDefault();
      
      document.addEventListener('pointermove', onPointerMove);
      document.addEventListener('pointerup', onPointerUp);
      slider.className += ' slider_dragging';

      function onPointerMove(event) {

        let left = event.clientX  - slider.getBoundingClientRect().left;
        let leftRelative = left / slider.offsetWidth;

        if (leftRelative < 0) {
          leftRelative = 0;
        }

        if (leftRelative > 1) {
          leftRelative = 0;
        }

        let leftPercents = leftRelative * 100;

        let segments = steps - 1;
        let approximateValue = leftRelative * segments;
        let value = Math.round(approximateValue);
        if (sliderValue.innerHTML != value) {
          sliderSteps.children[value].className += ' slider__step-active';
          sliderSteps.children[sliderValue.innerHTML].classList.remove('slider__step-active');
          sliderValue.innerHTML = value; 
        };
        let thumb = slider.querySelector('.slider__thumb');
        let progress = slider.querySelector('.slider__progress');
        thumb.style.left = `${leftPercents}%`;
        progress.style.width = `${leftPercents}%`;
      }

      function onPointerUp(event) {
        
        document.removeEventListener('pointerup', onPointerUp);
        document.removeEventListener('pointermove', onPointerMove);
        slider.classList.remove('slider_dragging'); 
        moveThumb(event);
      }
    };

    slider.addEventListener('click', moveThumb);
    this.elem = slider;
  }
}

