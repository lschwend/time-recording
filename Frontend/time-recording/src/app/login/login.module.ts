import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login-routing.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, LoginRouteModule],
  declarations: [LoginComponent],
})
export class LoginComponentModule {}