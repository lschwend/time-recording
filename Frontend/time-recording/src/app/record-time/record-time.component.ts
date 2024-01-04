import { Component } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

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


  recordTime() {
    // Reset the timer if it's already running
    this.stopTimer();

    // Start the timer
    this.timerSubscription = timer(0, 1000).pipe(
      takeWhile(() => true) // Continue until explicitly stopped
    ).subscribe(() => {
      this.elapsedTime++;
    });

    // Implement logic to record time (e.g., store in a service)
    console.log('Time Recorded:', { description: this.description, startTime: this.startTime });
  }

  stopTimer() {
    // Stop the timer and reset the elapsed time
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
      this.endtime = this.startTime + this.elapsedTime;
      console.log('Time Recorded:', { description: this.description, endtime: this.endtime });
      this.elapsedTime = 0;
    }
  }

  formatElapsedTime(): string {
    const hours = Math.floor(this.elapsedTime / 3600);
    const minutes = Math.floor((this.elapsedTime % 3600) / 60);
    const seconds = this.elapsedTime % 60;
  
    return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }
  
  pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  ngOnDestroy() {
    // Make sure to stop the timer when the component is destroyed
    this.stopTimer();
  }
}
