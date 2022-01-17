import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor() { }
  profileInformation!:FormGroup;
  ngOnInit(): void {
    this.profileInformation=new FormGroup({
      userName:new FormControl(''),
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      aboutUser:new FormControl(''),
      areaOfInterest:new FormControl(''),
      userProfession:new FormControl('')
    })
  }
  onSubmit(profileData:FormGroup)
  {
    console.log(profileData);
    
  }

}
