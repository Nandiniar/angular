import { Component } from '@angular/core';

@Component({
  selector: 'app-buttongame',
  imports: [],
  templateUrl: './buttongame.component.html',
  styleUrl: './buttongame.component.css'
})
export class ButtongameComponent {
solve(){
  alert('hii')
}
event(){
  console.log("Function called")
  this.otherfunction() // yaha pe aise this likhna important hota hai
}
otherfunction(){
  console.log("other function")
}
}
