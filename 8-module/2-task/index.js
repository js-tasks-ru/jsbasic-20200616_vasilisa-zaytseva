import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
   
    let elem = document.createElement('div');
    elem.className += 'products-grid';

    let productsGridInner = document.createElement('div');
    elem.appendChild(productsGridInner);
    productsGridInner.className += "products-grid__inner";

    this.productCards = [];

    for (let product of products) {
      let productCard = new ProductCard(product);
      productsGridInner.append(productCard.elem);
      this.productCards.push(productCard);
    }
    console.log(this.productCards);
    this.elem = elem;
    this.productsGridInner = productsGridInner;
    this.filters = {}
  }


    productSelector (product,filters) {
      if (filters.maxSpiciness !== undefined && filters.maxSpiciness < product.spiciness) {
        console.log("Filtered out too spicy");
        return false;
      }
      if (filters.noNuts && product.nuts === true) {
        console.log("Filtered out as contains nuts");
        return false; 
      }
      if (filters.category !== undefined && filters.category != "" && filters.category != product.category) {
        console.log("Filtered out as wrong category", filters);
        return false;
      }
      if (filters.vegeterianOnly && product.vegeterian !== true){
        console.log("Filtered out as non vegeterian");
        return false;
      }  
      return true;
    }


    updateFilter(filters){
      for(var k in filters) this.filters[k]=filters[k];
      console.log("Update filter ", filters)
      for (let productCard of this.productCards) {
        if (this.productSelector(productCard.product, this.filters)) {
          console.log("Match seletctor ", productCard.product)
          if (!this.productsGridInner.contains(productCard.elem)) {
            console.log("Append ", productCard.product)
            this.productsGridInner.appendChild(productCard.elem);
          }
        } else { 
          console.log("Not Match seletctor ", productCard.product)
          if (this.productsGridInner.contains(productCard.elem)) {
            console.log("Remove ", productCard.product)
            this.productsGridInner.removeChild(productCard.elem);
          }
        }
      }
    }
}

    


