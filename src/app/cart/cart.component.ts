import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  cartItems = [];
  checkoutForm;

  constructor(
    private cartService: CartService ,
    private formBuilder: FormBuilder,
  ) { 
      this.cartItems = this.cartService.getItems();
      this.checkoutForm = this.formBuilder.group({
        name : '',
        address: ''
      });
  }

  ngOnInit() {
      
  }

  onSubmit(customerData){
    console.warn('Your order has been submitted', customerData);
    this.cartItems = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}