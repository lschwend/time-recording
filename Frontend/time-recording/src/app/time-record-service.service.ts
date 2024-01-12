import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeRecord } from './models/TimeRecordModel';

@Injectable({
  providedIn: 'root'
})
export class TimeRecordServiceService {

  constructor(private httpClient: HttpClient) { }

  public async post(time: TimeRecord) {
    return new Promise((resolve, reject) => {
      this.httpClient.post('http://localhost:8080/time/saveRecord', time.toJson).subscribe();
    });
  }
}
