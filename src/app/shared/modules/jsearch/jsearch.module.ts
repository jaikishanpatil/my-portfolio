import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JSearchRoutingModule } from './jsearch-routing.module';
import { DyamicSearchComponent } from './components/dyamic-search/dyamic-search.component';
import { FormsModule } from '@angular/forms';
import { DynamicSearchSecondComponent } from './components/dynamic-search-second/dynamic-search-second.component';

@NgModule({
  declarations: [DyamicSearchComponent, DynamicSearchSecondComponent],
  imports: [CommonModule, JSearchRoutingModule, FormsModule],
  exports: [DyamicSearchComponent, DynamicSearchSecondComponent],
})
export class JSearchModule {}
