import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter:number=10;
  incremento():void{
    this.counter++
  }
  decremento():void{
    this.counter--
  }
  reset(value:number):number{
   return this.counter=value;
  }
}
