import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  list:Product[]=[
    {"id":1, "name":"Apple iPad ", "price":229.08,"description":"Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life –","images":["https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_UL320_.jpg"] },
    {"id":2, "name":"Android Tablet", "price":89.99,"description":"Android Tablet, 10.1 Inch Android 13 Tablet, 6GB RAM 128GB ROM, 1TB Expand, Tablet with 8000mAh Long ","images":["https://m.media-amazon.com/images/I/81DJkZFgmEL._AC_UL320_.jpg"] },
    {"id":3, "name":"Android Tablet", "price":90,"description":"Android Tablet 2 in 1 Tablet, 10 inch Android 12 Tablet 6GB+64GB with Keyboard, Tablets with Case Mouse Stylus,512GB Expandable Dual Camera, WiFi, Bluetooth, Google Certified Tablet PC(Green)","images":["https://m.media-amazon.com/images/I/71FwXieCMdL._AC_UL320_.jpg"] },
    {"id":4, "name":"Acer Aspire 3", "price":294.76,"description":"Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6 Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode","images":["https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_UL320_.jpg"] },
    {"id":5, "name":"SAMSUNG Galaxy Tab S6", "price":218.60,"description":"SAMSUNG Galaxy Tab S6 Lite 10.4 64GB Android Tablet, LCD Screen, S Pen Included, Slim Metal Design, AKG Dual","images":["https://m.media-amazon.com/images/I/51bia84JhhL._AC_UL320_.jpg"] },
    {"id":6, "name":"SAMSUNG Galaxy Tab A8", "price":174.50,"description":"SAMSUNG Galaxy Tab A8 10.5” 32GB Android Tablet, LCD Screen, Kids Content, Smart Switch, Expandable Memory, ","images":["https://m.media-amazon.com/images/I/61krikJxTmL._AC_UL320_.jpg"] },
    {"id":7, "name":"SAMSUNG Galaxy ", "price":120.10,"description":"SAMSUNG Galaxy Tab A7 Lite 8.7 32GB WiFi Android Tablet, Compact, Portable, Slim Design, Kid Friendly, Sturdy","images":["https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UL320_.jpg"] },
    {"id":8, "name":"ApoloSign 15.6", "price":1199.60,"description":"ApoloSign 15.6'' Laptop Computer, Quad-Core Intel Celeron N5095 Processors, 12GB DDR4, 512GB SSD, 108","images":["https://m.media-amazon.com/images/I/71vEXQierYL._AC_UL320_.jpg"] },
    {"id":9, "name":"HP 14 Laptop", "price":183.50,"description":"HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home","images":["https://m.media-amazon.com/images/I/815uX7wkOZS._AC_UL320_.jpg"] },
    {"id":10, "name":"ASUS C424MA-AS48F", "price":199.99,"description":"ASUS C424MA-AS48F Chromebook C424, 14.0 180 Degree FHD NanoEdge Display, Intel Dual Core Celeron ","images":["https://m.media-amazon.com/images/I/71DL+S6ihBL._AC_UL320_.jpg"] },
    {"id":11, "name":"Dell Optiplex 9020", "price":200.50,"description":"Dell Optiplex 9020 Small Form Factor Desktop with Intel Core i7-4770 Upto 3.9GHz, HD Graphics 4600 4K Support, ","images":["https://m.media-amazon.com/images/I/61S5alwyFLL._AC_UL320_.jpg"] },
    {"id":12, "name":"HP Newest 14", "price":397.98,"description":"HP Newest 14 Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 8GB RAM, 192GB ","images":["https://m.media-amazon.com/images/I/711OHeRmEaL._AC_UL320_.jpg"] },
    {"id":13, "name":" Newest Tablet 2", "price":70.89,"description":"2023 Newest Tablet 2 in 1 4GB+64GB 10 inch Tablet with Keyboard And Case Mouse Stylus Film Game Tablet ","images":["https://m.media-amazon.com/images/I/71Aqx7XspYL._AC_UL320_.jpg"] },
    {"id":14, "name":"Android Tablet", "price":169.99,"description":"Android Tablet, 10 Inch Android 12 Tablet, 8GB RAM 128GB ROM, 1TB Expand, Android Tablet with 5G WiFi, ","images":["https://m.media-amazon.com/images/I/71cLlgdkJNL._AC_UL320_.jpg"] },
  ]
  url='https://my-json-server.typicode.com/michaelaguilar89/myJsonServer'
  constructor(private http:HttpClient) { }

  getProducts(){
       var _list=localStorage.getItem('list');
        return this.list;
       
  }
  addPorduct(product:Product){
    this.list.push(product);
    localStorage.setItem('list',JSON.stringify(this.list));
  }
  getProductById(Id:string){
    let _id=parseInt(Id);
     const miProduct= this.list.find(x=>x.id==_id);
     return miProduct;
  }
}
