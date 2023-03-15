import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicTableRoutingModule } from './dynamic-table-routing.module';
import { DynamicTableComponent } from './components/base/dynamic-table/dynamic-table.component';
import { JSearchModule } from '../jsearch/jsearch.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicTableComponent],
  imports: [CommonModule, DynamicTableRoutingModule,JSearchModule,FormsModule],
  exports: [DynamicTableComponent],
})
export class DynamicTableModule {}
