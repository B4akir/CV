import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lower-header',
  templateUrl: './lower-header.component.html',
  styleUrls: ['./lower-header.component.css']
})
export class LowerHeaderComponent {


  constructor(private router: Router){}



  onClickNav(buttonName: string){


    this.router.navigate([buttonName]);












  }


}
