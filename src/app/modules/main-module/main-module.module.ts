import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainComponent } from './sub-pages/main/main.component';
import { JSearchModule } from 'src/app/shared/modules/jsearch/jsearch.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './sub-pages/footer/footer.component';

@NgModule({
  declarations: [MainComponent, FooterComponent],
  imports: [CommonModule, MainModuleRoutingModule, JSearchModule],
})
export class MainModuleModule {}
