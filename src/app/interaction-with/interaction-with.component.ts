import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-interaction-with',
  templateUrl: './interaction-with.component.html',
  styleUrls: ['./interaction-with.component.css']
})
export class InteractionWithComponent implements OnInit {

  @Input() dataFormInteractionComponent:string ='';
  @Output() eventToSendData = new EventEmitter<string>();
  finalData:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    changes['dataFormInteractionComponent'].currentValue?this.addFinalData(changes['dataFormInteractionComponent'].currentValue):'';
  }

  addFinalData(value:string){
    this.finalData.push(value);
  }

  sendDataToInterationComponent(value:string,input:any){
    this.eventToSendData.emit(value);
    input.value = '';
  }

}
