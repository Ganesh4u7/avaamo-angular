import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedin = false;
  stateChanged : EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }
  setLoggedin( val: boolean){
    this.isLoggedin = val;
    this.stateChanged.emit(this.isLoggedin);
  }

  get isLoggedStatus(){
    return this.isLoggedin;
  }
}