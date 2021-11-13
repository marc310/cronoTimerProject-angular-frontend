import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/workflow/projects/projects.component';


const routes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'isLeft' } },
  {path: 'projetos', component: ProjectsComponent, data: { animation: 'isRight' }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
