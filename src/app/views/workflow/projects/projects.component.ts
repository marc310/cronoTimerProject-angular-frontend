import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  projetos: Array<any> = new Array();
  displayedColumns: string[] = ['name', 'description'];
  
  constructor( private projectsService: ProjectsService){  }
  
  ngOnInit() {
    this.listarProjetos();
  }

  listarProjetos(){
    this.projectsService.getProjetos().subscribe(projetos => {
      this.projetos = projetos;
    }, err => {
      console.log( err )
    })
  }

}
