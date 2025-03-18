import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-root',
  imports: [ LoginComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  
})

export class AppComponent {
  title :string = 'SmartSource'; // these are properties of the class not variables we can only declare variable into the function given example into the work function
  name = 'Avinash Pal';
  x:any = 'avinash' // any datatype is for if we want store multiple data types of data in the variable
  y:string|number='pal' // in this way we store multiple types of data in single variable

  calculater (a:number,b:number){ // functions are declared without using function keyword in angular
    console.log('calculater function works')
    this.reader()  //this keyword is used to call function of the same class (to specify that this function present in the same class)
    this.work()
    console.log(this.y)
    this.y=7; // here we can assign numeric value as well bcoz of the initialization and  declaration of dataypes using "|" operator
    console.log(this.y)
    console.log(a+b);
    console.log("Calculater function end");
    
    
  }

  reader(){
    console.log('Reader function working')
  }

  work(){
    console.log('Work function start ')
     this.x=30
    console.log(this.x);

    let company = 'kgl' // this the variable 
    console.log(company) // to use(Access) the variables we don't have to use "this" keyword

    let add:any ='xyz'
    console.log(add)
    add=201
    console.log(add)
    console.log('Work function end ')

  }



  
}

