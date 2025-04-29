import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
