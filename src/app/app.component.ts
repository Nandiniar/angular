import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { Profilecomponent } from './profile/profile.component';
import { ButtongameComponent } from './buttongame/buttongame.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent,SignupComponent,Profilecomponent,ButtongameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title :string= 'Nandini';
  name='Arora';
  // hum function ke andar variablles ko let, var , const le sakte  hai but directly nhi
  hello(){
    const x=9;
  }

  hii(){
    let y=0;
  }
  namaste(){
    const  z=12;
  }
//  const a=90; hum aise nhi likh sakte
 b:string="hello";
 x=10;
 y=20;
}
