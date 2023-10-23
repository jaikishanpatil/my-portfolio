import { Component, Input, OnInit } from '@angular/core';

interface CarouselImges {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'dynamic-carousel',
  templateUrl: './dynamic-carousel.component.html',
  styleUrls: ['./dynamic-carousel.component.scss'],
})
export class DynamicCarouselComponent implements OnInit {
  @Input() images: CarouselImges[] = [];
  @Input() indicators: boolean = true;
  selectedIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}
  selectImage(index: any) {
    this.selectedIndex = index;
  }
}
