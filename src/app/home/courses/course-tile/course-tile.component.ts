import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { DataModel } from 'src/app/Models/DataModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.css']
})
export class CourseTileComponent implements OnInit {

  constructor( private cartService:CartService) { }
  @Input() data:any;
  @Output() courseSelected= new EventEmitter<DataModel>();
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
  onSelected(event:DataModel)
  {
    this.courseSelected.emit(event);
  }
}
