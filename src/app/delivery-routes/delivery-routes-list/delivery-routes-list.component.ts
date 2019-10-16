import { Component, OnInit } from '@angular/core';

import { DeliveryRouteModel } from '../models/delivery-route.model';
import { DeliveryRoutesViewService } from '../services/view/delivery-routes-view.service';

@Component({
  selector: 'gims-routebook-delivery-routes-list',
  templateUrl: './delivery-routes-list.component.html',
  styleUrls: ['./delivery-routes-list.component.css']
})
export class DeliveryRoutesListComponent implements OnInit {

  deliveryRoutes: DeliveryRouteModel[];

  constructor(private viewService: DeliveryRoutesViewService) {}

  ngOnInit() {
    this.deliveryRoutes = this.viewService.DeliveryRoutes;
  }

 onRouteSelected(currentDeliveryRoute: DeliveryRouteModel) {
  this.viewService.CurrentDeliveryRoute = currentDeliveryRoute;
 }
}
