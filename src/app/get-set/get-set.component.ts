import { Component } from '@angular/core';


@Component({
  selector: 'app-get-set',
  imports: [],
  templateUrl: './get-set.component.html',
  styleUrl: './get-set.component.scss'
})
export class GetSetComponent {

  name="";
  displayName="";
  displayEmail="";
  displayPass="";
  getName(event:Event){
    var x =(event.target as HTMLInputElement).value; // get value stored into a variable then assigned to x variable and directly assign value to x variable fetching from frontend using events
    this.name=x;
    console.log(name);
    
    
  }

  setName(){
    this.displayName = 'Avinash'; //set value to variable

  }

  showName(event:Event){
    this.displayName= this.name; 
  }

  setEmail(){
    this.displayEmail = 'test21@gmail.com'; //set value to variable

  }

  getEmail(y:string){
    this.displayEmail = y; 

  }

  setPass(){
    this.displayPass = 'pass123'; //set value to variable

  }

  getPass(z:string){ 
    this.displayPass = z; 

  }

}
