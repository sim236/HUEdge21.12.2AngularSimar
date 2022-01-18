import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CourseComponent } from '../home/course/course.component';
import { DataModel } from '../Models/DataModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  wishList:DataModel[]=[];
  cartList:DataModel[]=[];
  SelectedCourse:BehaviorSubject<DataModel>=new BehaviorSubject<DataModel>(new DataModel());
  constructor() { }

  getCartTotal():number
  {
    let sum=0;
    this.cartList.forEach(element => {
      if(element.discounted_price)
        sum=sum+parseInt(element.discounted_price);
      else
        sum=sum+parseInt(element.actual_price);
    });
    return sum;
  }
  addToCart(course:DataModel)
  {
    if(!this.cartList.includes(course))
    {
      this.cartList.push(course);
    }
    else
    {
      alert("element already exist");
    }        
  }
  addToWishList(course:DataModel)
  {
    if(!this.wishList.includes(course))
    {
      this.wishList.push(course);
    }
    else
    {
      alert("element already exist");
    }
    console.log(this.wishList);
  }
  removeFromCart(course:DataModel)
  {
    if(this.cartList.includes(course))
    this.cartList.splice(this.cartList.indexOf(course), 1);
    console.log(this.wishList)
    console.log(this.cartList);
  }
  removeFromWishList(course:DataModel)
  {
    if(this.wishList.includes(course))
    this.wishList.splice(this.wishList.indexOf(course), 1);
    console.log(this.wishList)
    console.log(this.cartList);
  }
}
