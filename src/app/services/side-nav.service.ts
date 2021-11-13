import { Injectable, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { DrawerComponent } from './drawer/drawer.component';
// import { MatSidenav } from '@angular/material';

import { BehaviorSubject } from 'rxjs';
@Injectable()

export class SideNavService {
 public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  // sidenav: any;

  constructor() { } 
 

  public toggle() {
    return this.sideNavToggleSubject.next(null);
  } 
}


