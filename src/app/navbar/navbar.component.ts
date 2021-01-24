import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  selectedTab = 'schedular';
  constructor( private router: Router,
               private dataService: DataServiceService 
    ) { 
      this.selectedTab = this.dataService.selectedTab;
    }

  ngOnInit(): void {
  }

  onSelectTab(tab:string){
    this.dataService.selectedTab = tab;
    this.router.navigate([`/${tab}`]); 
  }

  logout(){
    this.dataService.userDetails = null;
    this.router.navigate(['/']);
  }

}
