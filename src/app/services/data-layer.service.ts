import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLayerService {
  CoursesList!: any[];
  constructor(private httpClient:HttpClient) {  
    this.httpClient.get<any[]>("/assets/assignment_sample.json").subscribe((data)=>{
      this.CoursesList = data;
    });
  }
}
