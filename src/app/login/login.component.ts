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

  handelMouseEvent(event:MouseEvent){ //mouse event method

    console.log(event.type);
    console.log((event.target as Element).className);
   
    
  }

  handelEvent(event:Event){ //input event method

    console.log(event.type);
    console.log((event.target as HTMLInputElement).value);
   
    
  }

}
