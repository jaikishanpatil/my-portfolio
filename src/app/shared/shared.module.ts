import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DynamicCarouselModule } from './modules/dynamic-carousel/dynamic-carousel.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DynamicCarouselModule
  ],
  exports:[
    DynamicCarouselModule
  ]
})
export class SharedModule { }
