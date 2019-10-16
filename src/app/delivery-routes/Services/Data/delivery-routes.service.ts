// import { EventEmitter, Injectable } from '@angular/core';
import { Injectable } from '@angular/core';

import { DeliveryRouteModel } from '../../models/delivery-route.model';
import { DeliveryRouteStopModel } from '../../models/delivery-route-stop.model';
import { DeliveryRouteStopsService } from './delivery-route-stops.service';


@Injectable()
export class DeliveryRoutesService {

  // public DeliveryRouteSelected = new EventEmitter<DeliveryRouteModel>();

  private deliveryRoutes: DeliveryRouteModel[];

  constructor(private deliveryStopsService: DeliveryRouteStopsService) {

    this.loadData();

  }

  public GetAll(): DeliveryRouteModel[] {

    return this.deliveryRoutes.slice();

  }

  public GetByID(id: string): DeliveryRouteModel {

    return this.deliveryRoutes.find(currentDeliveryRoute => currentDeliveryRoute.ID.toUpperCase() === id.toUpperCase());

  }

  public GetDeliveryRouteStops(routeID: string): DeliveryRouteStopModel[] {
    return this.deliveryStopsService.GetAllByRouteID(routeID);
  }

  private loadData() {

    this.deliveryRoutes = [
      new DeliveryRouteModel('ROUTE01', 'Universal Studios', 'DONALD', 'VAN01', []),
      new DeliveryRouteModel('ROUTE02', 'Walt Disney World', 'RICK', 'VAN02', []),
      new DeliveryRouteModel('ROUTE03', 'Kennedy Space Center', 'TINA', 'VAN03', [])
    ];

  }
}
