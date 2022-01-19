import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor() { }
  profileInformation!:FormGroup;
  isProfessional:boolean = false;
 
  ngOnInit(): void {
    this.profileInformation=new FormGroup({
      userName:new FormControl('',[Validators.required]),
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl(''),
      aboutUser:new FormControl('',[Validators.maxLength(100)]),
      areaOfInterest:new FormControl(''),
      profession:new FormControl('')
    });
  }
  onProfessionClick()
  {
    console.log(this.profileInformation.get("profession")?.valueChanges.subscribe(
      value=>{
        if(value=='Professional')
        {
          this.isProfessional= true;
          this.profileInformation.addControl("professionalQualification",new FormGroup({
          professionalExperience:new FormControl(''),
          professionalExpertise:new FormControl(''),
          professionalRole:new FormControl('',[Validators.required]),
          }));
        }
        else{
          this.isProfessional = false;
          this.profileInformation.removeControl("professionalQualification");
        }
      }
    ));
    
  }
  onSubmit(profileData:FormGroup)
  {
    console.log(profileData);    
  }

}
