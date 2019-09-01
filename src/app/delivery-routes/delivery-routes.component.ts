import { Component, OnInit } from '@angular/core';

import { DeliveryRoutesService } from './Services/Data/delivery-routes.service';
import { DeliveryRoutesViewService } from './Services/view/delivery-routes-view.service';
import { DeliveryRouteStopsService } from './Services/Data/delivery-route-stops.service';

@Component({
  selector: 'gims-routebook-delivery-routes',
  templateUrl: './delivery-routes.component.html',
  styleUrls: ['./delivery-routes.component.css'],
  providers: [DeliveryRoutesService, DeliveryRouteStopsService, DeliveryRoutesViewService]
})
export class DeliveryRoutesComponent implements OnInit {

  ngOnInit() {}

}
