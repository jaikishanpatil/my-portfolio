import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicCarouselComponent } from './dynamic-carousel.component';



@NgModule({
  declarations: [
    DynamicCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DynamicCarouselComponent]
})
export class DynamicCarouselModule { }
