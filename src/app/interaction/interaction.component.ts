import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  dataToInteractionWithComponent:string = '';
  dataReceivedFromInteractionWithComponent:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  dataRecived(event:string){
    this.dataReceivedFromInteractionWithComponent.push(event);
  }

  clear(input:any){
    input.value = '';
  }

}
