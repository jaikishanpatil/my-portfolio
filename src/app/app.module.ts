import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_OPTIONS } from './shared/modules/alerts/consts/default-options.const';
import { AlertsModule } from './shared/modules/alerts/alerts.module';
const options =DEFAULT_OPTIONS
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,BrowserAnimationsModule,AlertsModule.forRoot(options)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
