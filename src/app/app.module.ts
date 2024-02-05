import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LowerHeaderComponent } from './header/lower-header/lower-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';



const  routes: Routes = [

  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'experience', component: ExperienceComponent},

];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LowerHeaderComponent,
    PagesComponent,
    HomeComponent,
    ProjectsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    RouterModule.forRoot(routes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
