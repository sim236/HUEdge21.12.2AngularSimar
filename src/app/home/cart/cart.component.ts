import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DataLayerService } from 'src/app/services/data-layer.service';

import { DataModel } from 'src/app/Models/DataModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
addedCartList:DataModel[]=[]
addedWishList:DataModel[]=[]
  constructor(public cartService:CartService, private dataService:DataLayerService) {

   }

  ngOnInit(): void {
    this.addedCartList=this.cartService.cartList;
    this.addedWishList=this.cartService.wishList;
  }
  addToWishList(course:DataModel)
  {
    this.cartService.addToWishList(course);
    this.cartService.removeFromCart(course);
  }
  removeCourseFromCart(course:DataModel)
  {
    this.cartService.removeFromCart(course);
  }
}
