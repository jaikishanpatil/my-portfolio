import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainComponent } from './sub-pages/main/main.component';
import { JSearchModule } from 'src/app/shared/modules/jsearch/jsearch.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './sub-pages/footer/footer.component';
import { DynamicTableModule } from 'src/app/shared/modules/dynamic-table/dynamic-table.module';

@NgModule({
  declarations: [MainComponent, FooterComponent],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    JSearchModule,
    DynamicTableModule,
  ],
})
export class MainModuleModule {}
