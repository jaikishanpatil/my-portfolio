import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DynamicCarouselModule } from './modules/dynamic-carousel/dynamic-carousel.module';
import { CardsModule } from './modules/cards/cards.module';

const modules=[
  CardsModule,
  DynamicCarouselModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ...modules
  ],
  exports:[
    ...modules
  ]
})
export class SharedModule { }
