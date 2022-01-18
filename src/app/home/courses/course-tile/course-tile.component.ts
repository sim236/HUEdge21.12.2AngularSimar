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
  addToCart(Course:DataModel)
  {
    this.cartService.addToCart(Course);
  }
  addToWishList(Course:DataModel)
  {
    this.cartService.addToWishList(Course);
  }
  onSelected(Course:DataModel)
  {
    this.courseSelected.emit(Course);
  }
}
