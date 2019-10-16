import { Component, OnInit, Input } from '@angular/core';
import { DeliveryRouteStopTaskModel } from 'src/app/delivery-routes/models/delivery-route-stop-task.model';

@Component({
  selector: 'gims-routebook-delivery-route-stop-tasks-list',
  templateUrl: './delivery-route-stop-tasks-list.component.html',
  styleUrls: ['./delivery-route-stop-tasks-list.component.css']
})
export class DeliveryRouteStopTasksListComponent implements OnInit {

  @Input() Tasks: DeliveryRouteStopTaskModel[];

  constructor() { }

  ngOnInit() {
  }

}
