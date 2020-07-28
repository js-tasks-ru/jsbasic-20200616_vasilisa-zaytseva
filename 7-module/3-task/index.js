export default class StepSlider {
  constructor({ steps, value = 0 }) {
    
    let slider = document.createElement('div');
    slider.className += 'slider';

    let sliderThumb = document.createElement('div');
    slider.appendChild(sliderThumb);
    sliderThumb.className += 'slider__thumb';
    sliderThumb.style.left = '0%';

    let sliderValue = document.createElement('span');
    sliderThumb.appendChild(sliderValue);
    sliderValue.className += 'slider__value';
    sliderValue.innerHTML = value;

    let sliderProgress = document.createElement('div');
    slider.appendChild(sliderProgress);
    sliderProgress.className += 'slider__progress';
    sliderProgress.style.width = '0%';
    
    let sliderSteps = document.createElement('div');
    slider.appendChild(sliderSteps);
    sliderSteps.className += 'slider__steps';

    let sliderStepActive = document.createElement('span');
    sliderSteps.appendChild(sliderStepActive);
    sliderStepActive.className += 'slider__step-active';
    
    for (let i = 0; i < steps - 1; i++) {
      let span = document.createElement('span');
      sliderSteps.appendChild(span);
    }
    
    slider.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      sliderSteps.children[value].className += 'slider__step-active';
      sliderSteps.children[sliderValue.innerHTML].classList.remove('slider__step-active');
      sliderValue.innerHTML = value;
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      let leftPercents = valuePercents;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;
      slider.dispatchEvent ( new CustomEvent('slider-change', { 
       detail: value, 
       bubbles: true 
      }));
    });
    this.elem = slider;
  }
}
