import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  constructor(private route: Router) { }

  currentFilter: string='';

  gotoProjects(){

    this.route.navigate(['/projects']);


  }

  filter(clicked: string){
    this.currentFilter=clicked;


  }


}
