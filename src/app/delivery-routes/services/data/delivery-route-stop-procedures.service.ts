import { Injectable } from '@angular/core';
import { DeliveryRouteStopProcedureModel } from '../../models/delivery-route-stop-procedure.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryRouteStopProceduresService {

  deliveryRouteStopProcedures: DeliveryRouteStopProcedureModel[];

  constructor() {

    this.loadData();

  }

  public GetAllByStopID(stopID: string): DeliveryRouteStopProcedureModel[] {
    return this.deliveryRouteStopProcedures.filter( procedure => procedure.StopID === stopID).slice();
  }

  private loadData(): void {

    this.deliveryRouteStopProcedures = [
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopProcedureModel('R01-MON-S00-0001', 'STOP-02-MON-00', null, '0001', 'Procedure 1 for Stop 00 of Route 02 on Monday', 'General Procedures for Beyda & Associates' , '../../../../assets/Procedures/Beyda - General Procedures.html'),

      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopProcedureModel('R01-MON-S00-0002', 'STOP-02-MON-00', null, '0002', 'Procedure 2 for Stop 00 of Route 02 on Monday', 'Loading Procedures for Beyda', '../../../../assets/Procedures/Beyda - General Procedures.html'),

      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopProcedureModel('R01-MON-S01-0001', 'STOP-02-MON-01', null, '0000', 'Beyda & Associates', 'General Procedures' , '../../../../assets/Procedures/Beyda - General Procedures.html'),

      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopProcedureModel('R01-MON-S01-0001', 'STOP-02-MON-01', null, '0001', 'Walt Disney World Procedures', 'Procedures for WDW' , '../../../../assets/Procedures/WDW - General Procedures.html'),

      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopProcedureModel('R01-MON-S01-0001', 'STOP-02-MON-01', null, '0002', 'Panchitos Procedures', 'Merchandising and recieiving procedures for WDW - Panchitos', '../../../../assets/Procedures/WDW - Panchitos Procedures.html')

    ];
  }
}
