import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  title = 'CronoTimer';
  menu: any[] = [];
  
  constructor( private appService: AppService ) { }
  
  ngOnInit(): void {
    this.menu = this.appService.getAllMenu();
  }

}
