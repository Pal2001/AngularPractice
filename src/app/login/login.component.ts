import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-login',
  imports: [AboutComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  name:string = "KGL";
  clientID = 20;

  handelEvent(event:MouseEvent){

    console.log(event.type);
    console.log((event.target as Element).className);
   
    
  }

}
