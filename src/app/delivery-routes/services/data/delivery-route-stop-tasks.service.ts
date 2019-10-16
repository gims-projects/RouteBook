import { Injectable } from '@angular/core';
import { DeliveryRouteStopTaskModel } from '../../models/delivery-route-stop-task.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryRouteStopTasksService {

  tasks: DeliveryRouteStopTaskModel[] = [];
  constructor() {

    this.loadData();

  }

  public GetAllByStopID(stopID: string): DeliveryRouteStopTaskModel[] {
    return this.tasks.filter( procedure => procedure.StopID === stopID).slice();
  }


  private loadData(): void {
    this.tasks = [
      new DeliveryRouteStopTaskModel('TASK-00000', 'STOP-02-MON-01', 'Receive merchandise with Data Maintenance.'),
      new DeliveryRouteStopTaskModel('TASK-00001', 'STOP-02-MON-01', 'Put merchandise in display areas.'),
      new DeliveryRouteStopTaskModel('TASK-00002', 'STOP-02-MON-01', 'Task 02 - Stop 01 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00003', 'STOP-02-MON-01', 'Task 03 - Stop 01 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00004', 'STOP-02-MON-01', 'Task 04 - Stop 01 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00005', 'STOP-02-MON-01', 'Task 05 - Stop 01 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00006', 'STOP-02-MON-01', 'Task 06 - Stop 01 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00007', 'STOP-02-MON-01', 'Task 07 - Stop 01 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00008', 'STOP-02-MON-01', 'Task 08 - Stop 01 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00009', 'STOP-02-MON-01', 'Task 09 - Stop 01 on Route 02 on Mon '),

      new DeliveryRouteStopTaskModel('TASK-00010', 'STOP-02-MON-00', 'Task 10 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00011', 'STOP-02-MON-00', 'Task 11 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00012', 'STOP-02-MON-00', 'Task 12 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00013', 'STOP-02-MON-00', 'Task 13 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00014', 'STOP-02-MON-00', 'Task 14 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00015', 'STOP-02-MON-00', 'Task 15 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00016', 'STOP-02-MON-00', 'Task 16 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00017', 'STOP-02-MON-00', 'Task 17 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00018', 'STOP-02-MON-00', 'Task 18 - Stop 00 on Route 02 on Mon '),
      new DeliveryRouteStopTaskModel('TASK-00019', 'STOP-02-MON-00', 'Task 19 - Stop 00 on Route 02 on Mon '),
    ];

    this.tasks[0].UrlToHTMLFile = '../../../../assets/Procedures/WDW - Panchitos Procedures.html#receiving';
    this.tasks[1].UrlToHTMLFile = '../../../../assets/Procedures/WDW - Panchitos Procedures.html#merchandising';

  }
}

