import { Injectable } from '@angular/core';
import { DeliveryRouteStopDirectionsModel } from '../../Models/delivery-route-stop-directions.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryRouteStopDirectionsServiceService {

  private deliveryRouteStopDirections: DeliveryRouteStopDirectionsModel[];

  constructor() {

    this.loadData();

  }

  public GetAllByRouteID(routeStopID: string): DeliveryRouteStopDirectionsModel[] {

    // tslint:disable-next-line: max-line-length
    return this.deliveryRouteStopDirections.filter( currentStopDirection => currentStopDirection.StopID.toUpperCase() === routeStopID.toUpperCase()).slice();

  }

  public GetByID(id: string): DeliveryRouteStopDirectionsModel {

    return this.deliveryRouteStopDirections.find( currentStopDirection => currentStopDirection.ID.toUpperCase() === id.toUpperCase() );

  }

  private loadData() {

    this.deliveryRouteStopDirections = [

    ];

  }

}
