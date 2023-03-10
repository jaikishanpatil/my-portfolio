import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}
  text: string = '';
  ngOnInit(): void {}

  onChange(event: any) {
    this.text = event;
    console.log(event);
  }
}
