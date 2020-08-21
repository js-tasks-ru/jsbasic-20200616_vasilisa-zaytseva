import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    let elem = document.createElement('div');
    elem.className = 'card';
    
    let cardTop = document.createElement('div');
    elem.appendChild(cardTop);
    cardTop.className = 'card__top';
    let img = document.createElement('img');
    cardTop.appendChild(img);
    img.setAttribute('src', `/assets/images/products/${product.image}`);
    img.className = 'card__image';
    img.setAttribute('alt', 'product');
    let span = document.createElement('span');
    cardTop.appendChild(span);
    span.className = 'card__price';
    span.innerHTML = `€${product.price.toFixed(2)}`;
    
    let cardBody = document.createElement('div');
    elem.appendChild(cardBody);
    cardBody.className = 'card__body';
    let cardTitle  = document.createElement('div');
    cardBody.appendChild(cardTitle);
    cardTitle.className = 'card__title';
    cardTitle.innerHTML = `${product.name}`;
    let button = document.createElement('button');
    cardBody.appendChild(button);
    button.className = 'card__button';
    button.setAttribute('type', 'button');
    let img2 = document.createElement('img');
    button.appendChild(img2);
    img2.setAttribute('src', '/assets/images/icons/plus-icon.svg');
    img2.setAttribute('alt', 'icon');
    const productId = product.id;
    button.addEventListener('click', () => {
      let event = new CustomEvent("product-add", { 
        detail: productId, 
        bubbles: true 
      });
      elem.dispatchEvent(event);
    });

    this.elem = elem;
    this.product = product;
  }
}
