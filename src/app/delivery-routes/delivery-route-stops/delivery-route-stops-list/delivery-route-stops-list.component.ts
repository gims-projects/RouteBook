import { Component, OnInit, Input } from '@angular/core';

import { DeliveryRouteStopModel } from '../../Models/delivery-route-stop.model';

@Component({
  selector: 'gims-routebook-delivery-route-stops-list',
  templateUrl: './delivery-route-stops-list.component.html',
  styleUrls: ['./delivery-route-stops-list.component.css']
})
export class DeliveryRouteStopsListComponent implements OnInit {

  constructor() {}

  @Input() deliveryRouteStops: DeliveryRouteStopModel[];

  ngOnInit() {}

}
