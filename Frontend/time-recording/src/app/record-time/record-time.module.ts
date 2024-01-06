import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordTimeComponent } from './record-time.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [RecordTimeComponent],
  exports: [RecordTimeComponent]
})
export class RecordTimeComponentModule {}