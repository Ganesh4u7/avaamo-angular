import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { HttpService } from '../http.service';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;


  signupStatus = null;
  signupMesage = null;

  constructor(
              private httpService: HttpService,
               private dataService:DataServiceService,
               private loginService:LoginService,
               private router:Router 
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(null),
      type: new FormControl(null)
    })
  }

  onSignup(){
    let userData = {
      "photoUrl": null,
      name: this.signupForm.value.name.toLowerCase(),
      "label": null,
      type: this.signupForm.value.type
      };

     // console.log(userData);

    this.httpService.signup(userData).subscribe(
      (response)=>{
        // console.log(response)
        if(response.status == true){
         // console.log(response.payload);
          this.signupStatus = true;
          this.signupMesage = "User Registered Successfully";
          this.dataService.userDetails = response.payload;
          this.loginService.setLoggedin(true);
          this.router.navigate(["/scheduler"]);
        }
        else{
         // console.log(response);
          this.signupStatus = false;
          this.signupMesage = response.payload;
        }
      },
      (error)=>{
        //this.loginStatus = false;
        console.log(error);
      }
    );  
      
  }

  goToLogin(){
    this.router.navigate(['/']);
  }

}
