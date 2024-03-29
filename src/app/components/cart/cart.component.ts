import { Component,OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  list:Cart[]=[];
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.list=this.cartService.getCart();
    this.list.forEach(element => {
    console.log(element.name,' | ',element.price)
    });
  }

}
