import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DeliveryRoutesViewService } from '../../services/view/delivery-routes-view.service';
import { DeliveryRouteStopTaskModel } from '../../models/delivery-route-stop-task.model';
import { DeliveryRouteStopTasksService } from '../../services/data/delivery-route-stop-tasks.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'gims-routebook-delivery-route-stop-tasks',
  templateUrl: './delivery-route-stop-tasks.component.html',
  styleUrls: ['./delivery-route-stop-tasks.component.css']
})
export class DeliveryRouteStopTasksComponent implements OnInit {

  tasks: DeliveryRouteStopTaskModel[];

  constructor(private viewService: DeliveryRoutesViewService,
              private dataService: DeliveryRouteStopTasksService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.parent.params.subscribe(
      (params: Params) => {
        this.tasks = this.dataService.GetAllByStopID( params.stopID );
      }
    );
  }
}
