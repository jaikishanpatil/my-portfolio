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
  @Input() controls: boolean = true;
  @Input() autoSlide: boolean = false;
  @Input() slideInterval: number = 3000; //defaault 3 sec
  selectedIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImage();
    }
  }

  autoSlideImage() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
  selectImage(index: any) {
    this.selectedIndex = index;
  }
  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
