import { Component } from '@angular/core';

@Component({
  selector: 'app-buttongame',
  imports: [],
  templateUrl: './buttongame.component.html',
  styleUrl: './buttongame.component.css'
})
export class ButtongameComponent {
   name:string="hello world"

   // agar mutiple  datatype chaiye ek variable ka toh hum 
    date:string|number="Hello";
    other:any=123; // any means ke ab datatype koi sa bhi ho sakta hai variable ka


  printf(){
    this.date=12;
    console.log(this.date);
  }

   
solve(){
  this.other="Nandini"
  alert('hii')
}
event(){
  console.log("Function called")
  this.otherfunction() // yaha pe aise this likhna important hota hai
}
otherfunction(){
  console.log("other function")
}

updateVar(){
  let x:number=30; // hum aise yeh let function ke andar kar sakte hai but function ke bar nhi
  console.log(x)
}
sum(a:number,b:number){
  console.log(a+b);
}
}
