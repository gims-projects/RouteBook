import { Component, OnInit } from '@angular/core';

import { DeliveryRoutesService } from './services/data/delivery-routes.service';
import { DeliveryRouteStopsService } from './services/data/delivery-route-stops.service';

import { DeliveryRoutesViewService } from './services/view/delivery-routes-view.service';

/**
 *  delivery route component file comment
 *
 */

/**
 * The delivery routes component is responsible for initialing the view servce.
 * * sllsdflsdld
 * ? sldf;adsfakdsfspkfds
 * ! ;ldads;lf;asldf
 * TODO: FBVBXVBFGFFGFFG
 */
@Component({
  selector: 'gims-routebook-delivery-routes',
  templateUrl: './delivery-routes.component.html',
  styleUrls: ['./delivery-routes.component.css'],
  providers: [DeliveryRoutesService, DeliveryRouteStopsService, DeliveryRoutesViewService] // todo these need to go into app module.
})
export class DeliveryRoutesComponent implements OnInit {

  constructor(private viewService: DeliveryRoutesViewService) {}

  ngOnInit() {
    this.viewService.LoadAllDeliveryRoutes();
    this.viewService.CurrentSelectedDay = 1;
  }
}
