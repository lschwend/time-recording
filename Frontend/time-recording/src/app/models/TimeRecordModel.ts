export class TimeRecord {
    description: string;
    startTime: string;
    elapsedTime: number;
  
    constructor(description: string, startTime: string, elapsedTime: number) {
      this.description = description;
      this.startTime = startTime;
      this.elapsedTime = elapsedTime;
    }
  
    static fromJson(json: any): TimeRecord {
      return new TimeRecord(json.description, json.startTime, json.elapsedTime);
    }
  
    toJson(): any {
      return {
        description: this.description,
        startTime: this.startTime,
        elapsedTime: this.elapsedTime,
      };
    }
  }