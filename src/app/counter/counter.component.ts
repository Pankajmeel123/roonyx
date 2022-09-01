import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  firstTestInput:number = 1;
  secondTestInput:number = 10;

  constructor() { }

  ngOnInit(): void {
    this.runCode();
  }

  clear(){
    console.clear();
  }

  runCode(){
    let [getA,nextA]= this.counter(this.firstTestInput);
    getA(); // 1
    nextA();
    getA(); // 2
    let [getB, nextB]= this.counter(this.secondTestInput);
    nextB();
    getA(); // 2
    getB(); // 11
    nextA();
    getA(); // 3
    getB(); // 11
  }

  counter(value = 0){
    var currentValue = value;
    var incrementCurrentValue = function(){
      currentValue++;
    }
    var returnCurrentValue = function(){
      console.log(currentValue);
    }
    return [returnCurrentValue,incrementCurrentValue];
  }

}
