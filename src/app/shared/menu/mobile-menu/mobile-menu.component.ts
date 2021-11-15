import { Component, OnInit, ViewChild } from '@angular/core' ;
import { AppService } from '../../../app.service';

@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  menu: any[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() { 
    this.menu = this.appService.getAllMenu();
  } 

}

