import { Component, OnInit } from '@angular/core';
import { DataModel } from 'src/app/Models/DataModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  constructor(private cartService:CartService) { }
  Course:DataModel=new DataModel();
  ngOnInit(): void {
    this.cartService.SelectedCourse.subscribe(data=>
      {
        this.Course=data;
      });
  }
  addToCart(Course:DataModel)
  {
    this.cartService.addToCart(Course);
  }
  addToWishList(Course:DataModel)
  {
    this.cartService.addToWishList(Course);
  }

}
