import { Component } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { TimeRecordServiceService } from '../time-record-service.service';
import { TimeRecord } from '../models/TimeRecordModel';

@Component({
  selector: 'app-record-time',
  templateUrl: './record-time.component.html',
  styleUrls: ['./record-time.component.scss'],
})
export class RecordTimeComponent {
  description: string = '';
  startTime: string = new Date().toISOString();;
  endtime: string = ''
  elapsedTime: number = 0;
  timerSubscription: Subscription | undefined;
  timeRecord: TimeRecord | undefined;

  constructor(private timeTrackingService: TimeRecordServiceService) {};

  recordTime() {
    // Reset the timer if it's already running
    this.stopTimer();
    this.endtime = '';
    // Start the timer
    this.timerSubscription = timer(0, 1000).pipe(
      takeWhile(() => true) // Continue until explicitly stopped
    ).subscribe(() => {
      this.elapsedTime++;
    });

    console.log('Time Recorded:', { description: this.description, startTime: this.startTime });
  }

  stopTimer() {
    // Stop the timer and reset the elapsed time
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
      const date = new Date(this.startTime)
      date.setSeconds(date.getSeconds() + this.elapsedTime);
      this.endtime = date.toISOString();
      
      console.log('Time Recorded:', { description: this.description, endtime: this.endtime });
      this.timeRecord = new TimeRecord(this.description, this.startTime, this.elapsedTime);
      this.timeTrackingService.post(this.timeRecord);
      this.elapsedTime = 0;
    }
  }

  formatElapsedTime(): string {
    const hours = Math.floor(this.elapsedTime / 3600);
    const minutes = Math.floor((this.elapsedTime % 3600) / 60);
    const seconds = this.elapsedTime % 60;
  
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  formatEndTime(): string {
    const endDate = new Date(this.endtime);
    const startDate = new Date(this.startTime);
    const seconds = endDate.getSeconds() - startDate.getSeconds();
    const minutes = endDate.getMinutes() - startDate.getMinutes();
    const hours = endDate.getHours() - startDate.getHours();
    return `${hours}h ${minutes}min ${seconds} sec`;
  }
  
  pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  ngOnDestroy() {
    // Make sure to stop the timer when the component is destroyed
    this.stopTimer();
  }
}
