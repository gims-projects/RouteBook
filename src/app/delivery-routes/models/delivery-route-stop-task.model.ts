import { Time } from '@angular/common';

export class DeliveryRouteStopTaskModel {
  public ID: string;
  public StopID: string;
  public Name: string;
  public UrlToHTMLFile: string;
  public ExpectedStartTime: Date;
  public ExpectedDuration: Time;
  public ActualStartTime: Date;
  public ActualDuration: Time;
  public Completed: boolean;
  public CompletedByID: string;
  public CompletedTime: Date;

  constructor(id: string, stopID: string, name: string) {
    this.ID = id;
    this.StopID = stopID;
    this.Name = name;

    // this.ExpectedStartTime = null;
    // this.ExpectedDuration.hours = 0;
    // this.ExpectedDuration.minutes = 0;
    // this.ActualStartTime = null;
    // this.ActualDuration.hours = 0;
    // this.ActualDuration.minutes = 0;
    // this.Completed = false;
    // this.CompletedByID = '';
    // this.CompletedTime = null;
  }
}
