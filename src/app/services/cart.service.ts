import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  wishList:string[]=[];
  cart:string[]=[];

  constructor() { }

  addToCart(id:string)
  {
    if(this.cart.indexOf(id)==-1)
    {
      this.cart.push(id);
    }
    else
    {
      alert("element already exist");
    }    
  }
  addToWishList(id:string)
  {
    if(this.wishList.indexOf(id)==-1)
    {
      this.wishList.push(id);
    }
    else
    {
      alert("element already exist");
    }
    console.log(this.wishList);
  }
  removeFromCart(id:any)
  {
    if(this.cart.indexOf(id)!=-1)
    this.cart.splice(this.cart.indexOf(id), 1);
    console.log(this.wishList)
    console.log(this.cart);
  }
  removeFromWishList(id:any)
  {
    if(this.wishList.indexOf(id)!=-1)
    this.wishList.splice(this.wishList.indexOf(id), 1);
    console.log(this.wishList)
    console.log(this.cart);
  }
}
