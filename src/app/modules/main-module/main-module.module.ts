import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainComponent } from './sub-pages/main/main.component';
import { JSearchModule } from 'src/app/shared/modules/jsearch/jsearch.module';
import { FooterComponent } from './sub-pages/footer/footer.component';
import { DynamicTableModule } from 'src/app/shared/modules/dynamic-table/dynamic-table.module';
import { HeaderModule } from './sub-pages/header/header.module';
import { NotFoundModule } from './sub-pages/not-found/not-found.module';
import { FooterModule } from './sub-pages/footer/footer.module';
import { TestComponent } from './sub-pages/test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment} from 'src/environments/environment.prod';

@NgModule({
  declarations: [MainComponent, TestComponent],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    JSearchModule,
    DynamicTableModule,
    HeaderModule,
    NotFoundModule,
    FooterModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers:[
    DatePipe
  ]
})
export class MainModuleModule {}
