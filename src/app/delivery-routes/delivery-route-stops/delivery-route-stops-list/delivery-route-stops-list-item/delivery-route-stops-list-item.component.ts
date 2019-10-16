import { Component, OnInit, Input } from '@angular/core';
import { DeliveryRouteStopModel } from '../../../models/delivery-route-stop.model';

@Component({
  selector: 'gims-routebook-delivery-route-stops-list-item',
  templateUrl: './delivery-route-stops-list-item.component.html',
  styleUrls:  ['./delivery-route-stops-list-item.component.css']
})
export class DeliveryRouteStopsListItemComponent implements OnInit {

  @Input() deliveryRouteStop: DeliveryRouteStopModel;

  constructor() { }

  ngOnInit() {
  }

}
