import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data:any;
  count=0;
  list:Cart[]|any;
  constructor() { }
  addNew(item:Cart){
    this.getCart();
    this.list.push(item);
    localStorage.setItem('cart',JSON.stringify(this.list));
    this.count++;
  }
  getCart(){
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.list = JSON.parse(storedCart);
    }
        return this.list;
  }
}
