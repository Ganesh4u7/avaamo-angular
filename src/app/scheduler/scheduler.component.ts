import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit,OnDestroy {

  jobs;
  interval;
  username;
  searchText='';
  filtered;
  jobsDisplay;

  constructor( private httpService: HttpService,
               private dataService:DataServiceService,
               private router:Router
    ) { }

  ngOnInit(): void {
    this.username = this.dataService.userDetails.name;
        this.interval = setInterval(() => {
          this.updateJobs();
      }, 10000);
  
      this.updateJobs();
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  

  onPause(job){
    this.httpService.pause_job({id:job._id}).subscribe(
      (response)=>{
        // console.log(response)
        if(response.status == true){
        //  console.log(response.payload);
          this.updateJobs();
        }
        else{
        //  console.log(response);
        }
      },
      (error)=>{
        //this.loginStatus = false;
        console.log(error);
      }
    );
  }

  onResume(job){
    this.httpService.resume_job({id:job._id}).subscribe(
      (response)=>{
        // console.log(response)
        if(response.status == true){
          //console.log(response.payload);
          this.updateJobs();
        }
        else{
         // console.log(response);
        }
      },
      (error)=>{
        //this.loginStatus = false;
        console.log(error);
      }
    );
  }

  onDelete(job){
    if(confirm("Are you sure to delete "+name)) {
     
    this.httpService.delete_job({id:job._id}).subscribe(
      (response)=>{
        // console.log(response)
        if(response.status == true){
         // console.log(response.payload);
          this.updateJobs();
        }
        else{
         // console.log(response);
        }
      },
      (error)=>{
        //this.loginStatus = false;
        console.log(error);
      }
    );
    console.log("Implement delete functionality here");
   }
  }

   timeSince(date) {

    let newDate = new Date(date).getTime();
    // console.log(Date());
    // console.log(  newDate);

    var seconds = Math.floor((Date.now() - newDate) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
 
  updateJobs(){
    this.httpService.get_jobs({name:this.username}).subscribe(
      (response)=>{
        // console.log(response)
        if(response.status == true){
         // console.log(response.payload);
          this.jobs = response.payload;
          if(this.searchText == undefined ||this.searchText == null || this.searchText == ''){
            this.jobsDisplay = response.payload;
           // console.log('camehere');
          }
          
        }
        else{
         // console.log(response);
        }
      },
      (error)=>{
        //this.loginStatus = false;
        console.log(error);
      }
    );
  }

  newJob(){
    console.log('hello');
    this.dataService.selectedTab ='create-job';
    this.router.navigate(["/create-job"]);
  }

  onSearch(search){
    let PATTERN = search.toLowerCase();
    this.searchText =PATTERN;
    
    if(this.searchText != undefined){
      

        this.filtered = this.jobs.filter((str) => {
          if (str.name.toLowerCase().includes(PATTERN)) {
            return str;
          }
        });

        this.jobsDisplay=this.filtered;

      }
      else if(this.searchText == undefined){
        this.jobsDisplay = this.jobs;
      }
  }

}
