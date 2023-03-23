import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  activeAccordion = 'One'

  ngOnInit(): void {}
 
  isActive (name: string){
    return this.activeAccordion === name
  }

  setActive(name: string){
    this.activeAccordion = name
  } 
}
