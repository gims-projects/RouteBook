import {
  Component,
  OnInit,
} from '@angular/core';

import {
  ActivatedRoute,
  Params
} from '@angular/router';

import {
  DeliveryRouteStopModel
} from '../../Models/delivery-route-stop.model';

import {
  DeliveryRouteStopsService
} from '../../Services/Data/delivery-route-stops.service';

@Component({
  selector: 'gims-routebook-delivery-route-stop-detail',
  templateUrl: './delivery-route-stop-detail.component.html',
  styleUrls: ['./delivery-route-stop-detail.component.css']
})
export class DeliveryRouteStopDetailComponent implements OnInit {

  CurrentDeliveryRouteStop: DeliveryRouteStopModel;
  CurrentDeliveryRouteStopID: string;
  DirectionButtonName: string;
  DirectionButtonClicked: boolean;

  constructor(private deliveryRouteService: DeliveryRouteStopsService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.CurrentDeliveryRouteStopID = params.stopID.toUpperCase();
        this.CurrentDeliveryRouteStop = this.deliveryRouteService.GetByID(this.CurrentDeliveryRouteStopID);
        this.DirectionButtonClicked = true;
        this.DirectionButtonName = 'Directions';
      }
    );
  }

  onRouteStopOptionsButtonClicked(buttonClicked: string) {

    this.DirectionButtonClicked = false;
    this.DirectionButtonName = buttonClicked;

    if (buttonClicked.toLowerCase() === 'directions') {
      this.DirectionButtonClicked = true;
    }
  }
}
