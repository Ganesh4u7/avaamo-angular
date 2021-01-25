import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { LoginService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  loginStatus =null;
  loginMessage = null;

  constructor( private httpService: HttpService,
               private dataService:DataServiceService,
               private loginService:LoginService,
               private router:Router 
    ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      name: new FormControl(null)
    });
  }

  onLogin(){
    
    let data = {name:this.loginForm.value.name.toLowerCase()};
    this.httpService.login(data).subscribe(
      (response)=>{
        // console.log(response)
        if(response.status == true){
        //  console.log(response.payload);
          this.loginStatus = true;
          this.loginMessage = "Registered User";
          this.dataService.userDetails = response.payload;
          this.loginService.setLoggedin(true);
          this.router.navigate(["/scheduler"]);

        }
        else{
          this.loginStatus = false;
          this.loginMessage = response.payload;
        //  console.log(response);
        }
      },
      (error)=>{
        //this.loginStatus = false;
        console.log(error);
      }
    );  

  }

  goToSignUp(){
    this.router.navigate(['/signup']);
  }

}
