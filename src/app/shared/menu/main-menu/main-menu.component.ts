import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  // @ViewChild('rightMobilenav') public mobilenav: MatSidenavModule;
  title = 'CronoTimer';

  constructor( private sideNavService: SideNavService ) { }

  ngOnInit(): void {
  }
  
  // toggleActive:boolean = false;

  // toggleRightMobilenav() {
  //   this.toggleActive = !this.toggleActive;
  //   this.mobilenav.toggle();

  //   console.log('Clicked');
  // }

  clickMenu() { 
    this.sideNavService.toggle();
  }


}
