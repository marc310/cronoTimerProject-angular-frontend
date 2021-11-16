import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
// services
import { AppService } from './app.service';
// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
// shared components
import { MainMenuComponent } from './shared/menu/main-menu/main-menu.component';
import { MobileMenuComponent } from './shared/menu/mobile-menu/mobile-menu.component';
// views
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/workflow/projects/projects.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    ProjectsComponent,
    MobileMenuComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    // material imports
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,

    FlexLayoutModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
