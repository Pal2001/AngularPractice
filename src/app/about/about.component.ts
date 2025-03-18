import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  count=0;

  // By using three different functions to do the process of count increament,reset and decreament
  handelIncreament(){
    this.count++;
  }

  handelDecreament(){
    this.count--;
  }

  handelReset(){
    this.count=0;
  }

  // By using single function we can handel above process

  handelClickCount(x:string){
    if (x=='add') {
      this.count++;
      
    } else if (x=='minus'){
      if(this.count<=0){
        this.count=0

      }else{
      this.count--;
      }

    }
    else{
      this.count=0;
    }
  }



}
