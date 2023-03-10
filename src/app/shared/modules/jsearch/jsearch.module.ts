import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JSearchRoutingModule } from './jsearch-routing.module';
import { DyamicSearchComponent } from './components/dyamic-search/dyamic-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DyamicSearchComponent],
  imports: [CommonModule, JSearchRoutingModule, FormsModule],
  exports: [DyamicSearchComponent],
})
export class JSearchModule {}
