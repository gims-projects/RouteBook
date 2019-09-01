import { Injectable } from '@angular/core';

import { DeliveryRouteModel } from '../../Models/delivery-route.model';
import { DeliveryRoutesService } from '../Data/delivery-routes.service';

@Injectable()
export class DeliveryRoutesViewService {

  public DeliveryRoutesData: DeliveryRouteModel[];

  constructor( private deliveryRoutesDataService: DeliveryRoutesService) {

    this.DeliveryRoutesData = deliveryRoutesDataService.GetAll();

  }


}
