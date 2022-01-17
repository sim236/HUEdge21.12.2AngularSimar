import { Component, OnInit } from '@angular/core';
import { DataLayerService } from 'src/app/services/data-layer.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  CoursesList:any;
  constructor(public dataService:DataLayerService) { }

  ngOnInit(){
    this.CoursesList=this.dataService.CoursesList;
  }


}
