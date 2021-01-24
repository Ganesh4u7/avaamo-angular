import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {

  jobsUrl;
  usersUrl;
  constructor( private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onUploadUsers(){

  }
  onUploadJobs(){

    // this.httpService.get_jobs().subscribe(
    //   (response)=>{
    //     // console.log(response)
    //     if(response.status == true){
    //       console.log(response.payload);
    //     }
    //     else{
    //       console.log(response);
    //     }
    //   },
    //   (error)=>{
    //     //this.loginStatus = false;
    //      console.log(error);
    //   }
    // );
    
  }
}
