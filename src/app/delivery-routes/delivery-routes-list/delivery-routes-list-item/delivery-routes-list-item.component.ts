import { Component, OnInit, Input } from '@angular/core';

import { DeliveryRouteModel } from '../../models/delivery-route.model';

@Component({
  selector: 'gims-routebook-delivery-routes-list-item',
  templateUrl: './delivery-routes-list-item.component.html',
  styleUrls: ['./delivery-routes-list-item.component.css']
})
export class DeliveryRoutesListItemComponent implements OnInit {

  @Input() deliveryRoute: DeliveryRouteModel;

  ngOnInit() {
  }

}
