import { Component, OnInit } from '@angular/core';
import { DeliveryRouteStopModel } from '../Models/delivery-route-stop.model';

@Component({
  selector: 'gims-routebook-delivery-route-stops',
  templateUrl: './delivery-route-stops.component.html',
  styleUrls: ['./delivery-route-stops.component.css']
})
export class DeliveryRouteStopsComponent implements OnInit {

  CurrentDeliveryRouteStop: DeliveryRouteStopModel;

  constructor() { }

  ngOnInit() {
  }

}
