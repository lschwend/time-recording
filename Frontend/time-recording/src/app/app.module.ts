import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecordTimeComponent } from './record-time/record-time.component';
import { DisplayTimesComponent } from './display-times/display-times.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, RecordTimeComponent, DisplayTimesComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
