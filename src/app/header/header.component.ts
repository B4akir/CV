import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private clipboardService: ClipboardService) {}


  email: string="bakirbukvic2@gmail.com";
  phoneNumber="0603067074";
  linkedinLink: string="https://www.linkedin.com/in/bakirbukvic/";
  linkedinImage: string= "https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473";
  phoneNumberImage: string= "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png";
  emailImage: string= "https://i.pinimg.com/originals/f6/c4/f8/f6c4f8516b117c58b2eaf3f276fdfff9.png";

  copyNumber(){
    this.clipboardService.copyFromContent(this.phoneNumber);
  }
  copyEmail(){
    this.clipboardService.copyFromContent(this.email);
  }


}
