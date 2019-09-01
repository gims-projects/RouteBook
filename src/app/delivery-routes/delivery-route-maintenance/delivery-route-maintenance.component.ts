import { ActivatedRoute, Params } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gims-routebook-delivery-route-maintenance',
  templateUrl: './delivery-route-maintenance.component.html',
  styleUrls: ['./delivery-route-maintenance.component.css']
})
export class DeliveryRouteMaintenanceComponent implements OnInit {

  currentDeliveryRouteID: string;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.currentDeliveryRouteID = params.routeID;
        this.editMode = params.routeID != null;
      }
    );
  }

}
