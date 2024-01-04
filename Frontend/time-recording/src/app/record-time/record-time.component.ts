import { Component } from '@angular/core';

@Component({
  selector: 'app-record-time',
  templateUrl: './record-time.component.html',
  styleUrls: ['./record-time.component.scss'],
})
export class RecordTimeComponent {
  description: string = '';
  startTime: string = '';

  recordTime() {
    // Implement logic to record time (e.g., store in a service)
    console.log('Time Recorded:', { description: this.description, startTime: this.startTime });
  }
}
