import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:any;

  constructor(private productService:ProductsService,private toastr: ToastrService,
              private cartService:CartService){

  }
  ngOnInit(){
    this.list= this.productService.getProducts();
  
    
  }
  add(id:number){
    const _id=id.toString();
    const miProduct= this.productService.getProductById(_id)
    const miCartModel:Cart={
      id:miProduct?.id,
      name:miProduct?.name,
      price:miProduct?.price,
      image:miProduct?.images[0],
      quantity:1,
      subTotal:miProduct?.price
    }
    this.cartService.addNew(miCartModel);
    this.toastr.success('New Product on your cart : '+miCartModel.name,'Message' );
  }
}
