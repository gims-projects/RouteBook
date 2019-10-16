import { Component, OnInit, Input } from '@angular/core';

import { DeliveryRouteStopModel } from '../../models/delivery-route-stop.model';
import { DeliveryRoutesViewService } from '../../services/view/delivery-routes-view.service';

@Component({
  selector: 'gims-routebook-delivery-route-stops-list',
  templateUrl: './delivery-route-stops-list.component.html',
  styleUrls: ['./delivery-route-stops-list.component.css']
})
export class DeliveryRouteStopsListComponent implements OnInit {

  constructor(private viewService: DeliveryRoutesViewService) {}

  @Input() deliveryRouteStops: DeliveryRouteStopModel[];

  ngOnInit() {
    this.deliveryRouteStops = this.viewService.RouteStopsFilteredByDayOfWeek;
  }

  RouteStopSelected(): void {

  }

}
