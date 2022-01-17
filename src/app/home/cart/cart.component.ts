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
addedCartList:any[]=[]
addedWishList:any[]=[]
  constructor(public cartService:CartService, private dataService:DataLayerService) { }

  ngOnInit(): void {
  }
  onClick()
  {    
    this.dataService.CoursesList.forEach((element:DataModel) => {    
    if(this.cartService.wishList.includes(element.id.toString()))
    {
      this.addedWishList.push(element);
    }
    });
    this.dataService.CoursesList.forEach((element:DataModel) => {    
    if(this.cartService.cart.includes(element.id.toString()))
    {
      this.addedCartList.push(element);
    }
  });
  }
  addToWishList(id:string)
  {
    this.cartService.addToWishList(id);
    this.cartService.removeFromCart(id);
  }
  removeCourseFromCart(id:string)
  {
    this.cartService.removeFromCart(id);
  }
}
