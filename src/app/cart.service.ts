import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class CartService {

  constructor(
    private httpClient: HttpClient 
  ){

  }

  items = [];

  getShippingPrices(){
      return this.httpClient.get('/assets/shipping.json');
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}