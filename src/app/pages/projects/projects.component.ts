import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

 index: number=0;
 selectedIndex: number=null;

  currentImage: string="";


//1

  ngShopImgs: string[] = [
    'assets/AngularStranica.png',
    'assets/AngularStranica2.png',
    'assets/AngularStranica3.png',
    'assets/AngularStranica4.png',
  ];

  rougeImgs: string[] = [
    'assets/Cigrica.png',
    'assets/Cigrica2.png',
    'assets/Cigrica3.png',
  ];

  images: string[][] = [
    this.ngShopImgs,
    this.rougeImgs
  ];

  isDisabled: boolean = true;


//ngShop, rougeImgs







  imgClick(selectedIndex: number){

    this.selectedIndex=selectedIndex;
    this.index=0;
    this.isDisabled=!this.isDisabled
    this.currentImage=this.images[this.selectedIndex][this.index];



  }


  rightNav(){
    if (this.index < this.images[this.selectedIndex].length - 1){
      this.index = this.index + 1;
      this.currentImage = this.images[this.selectedIndex][this.index];
      console.log(this.index);
    }
  }

  leftNav(){

    if (this.index!=0){
      this.index=this.index-1;
      this.currentImage=this.images[this.selectedIndex][this.index];
      console.log(this.index);


    }



  }

  exitImage(){
    this.isDisabled=true;

  }


}
