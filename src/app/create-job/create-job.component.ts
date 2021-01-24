import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormControl, FormGroup,NgForm} from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  addJobForm: FormGroup;
  username;
  jobResponse ;
  jobErrorResponse;
  errorMessage;
  emailSelect;

  constructor( private httpService: HttpService,
    private dataService: DataServiceService  ) { }

  ngOnInit(): void {
    this.emailSelect = true;
    this.username = this.dataService.userDetails.name;
    this.addJobForm = new FormGroup({
      method: new FormControl(null),
      endpoint: new FormControl(null),
      frequency:new FormControl(null),
      locations: new FormControl(null),
      responseType: new FormControl(null),
      type: new FormControl(null),
      responseCode:new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),
      alert:new FormControl(null),
      name: new FormControl(null)
    });
  }

  submitJob(){

    let newJob = {
      
      status: "Healthy 1min ago",
      name: this.addJobForm.value.name,
      notifications: {
       phones: [this.addJobForm.value.phone],
        emails: [this.addJobForm.value.email]
      },
      timezone: "UTC",
      request: {
        url: this.addJobForm.value.endpoint,
        method: this.addJobForm.value.method
      },
      request_interval_seconds: this.addJobForm.value.frequency,
      tolerated_failures: this.addJobForm.value.alert,
      created: new Date(),
      creator: this.username
    }

    this.httpService.create_job(newJob).subscribe(
      (response)=>{
        // console.log(response)
        if(response.status == true){
         // console.log(response.payload);
          this.jobResponse = true;
          this.jobErrorResponse = false;
          this.addJobForm.reset();
        }
        else{
          this.jobResponse = false;
          this.jobErrorResponse = true;
          this.errorMessage = "Job Name already exist,Please use another name";
         // console.log(response);
          this.addJobForm.reset();
        }
      },
      (error)=>{
        //this.loginStatus = false;
        this.errorMessage = "Error Occurred Please try again";
        this.jobErrorResponse = true;
         console.log(error);
      }
    );
  }

  changeEmailSelect(value){
    this.emailSelect = value;
  }

}
