import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  userDetails= null;
  selectedTab = 'schedular';

  constructor() { }
}
