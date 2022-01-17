import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.css']
})
export class CourseTileComponent implements OnInit {

  constructor( private cartService:CartService) { }
  @Input() data:any;
  ngOnInit(): void {
  }
  addToCart(id:string)
  {
    this.cartService.addToCart(id);
  }
  addToWishList(id:string)
  {
    this.cartService.addToWishList(id);
  }
}
