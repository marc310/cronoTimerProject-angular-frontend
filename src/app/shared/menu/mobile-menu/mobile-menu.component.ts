import { Component, OnInit, ViewChild } from '@angular/core' ;
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenavModule;

  constructor(private sideNavService: SideNavService) { }

  ngOnInit() { 
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      // this.sidenav.toggle();
      console.log('toggle');
    });
  } 

//   toggleRightSidenav() {
//     this.sidenav.toggle();
//  }

 
}

