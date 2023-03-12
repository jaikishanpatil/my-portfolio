import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-search-second',
  templateUrl: './dynamic-search-second.component.html',
  styleUrls: ['./dynamic-search-second.component.scss'],
})
export class DynamicSearchSecondComponent implements OnInit {
  @Input() placeholder: string = 'Search';
  constructor() {}

  ngOnInit(): void {}
}
