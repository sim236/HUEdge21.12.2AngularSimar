import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataModel } from 'src/app/Models/DataModel';
import { CartService } from 'src/app/services/cart.service';
import { DataLayerService } from 'src/app/services/data-layer.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  //SelectedCourse:DataModel=new DataModel();
  CoursesList:any;
  
  constructor(public dataService:DataLayerService, public router:Router, private cartService:CartService) { }

  ngOnInit(){
    this.CoursesList=this.dataService.CoursesList;
  }
  courseSelected(event:DataModel)
  {
    this.cartService.SelectedCourse.next(event);
    this.router.navigate(['Course']);
  }
}
