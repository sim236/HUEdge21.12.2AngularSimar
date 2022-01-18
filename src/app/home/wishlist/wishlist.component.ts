import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataModel } from 'src/app/Models/DataModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Output() courseSelected= new EventEmitter<DataModel>();
  constructor(public cartService:CartService) {
    
   }

  ngOnInit(): void {
  }
  addToCartfromWishlist(course:DataModel)
  {
    this.cartService.addToCart(course);
    this.cartService.removeFromWishList(course);
  }
  onSelected(course:DataModel)
  {
    this.courseSelected.emit(course);
  }
}
