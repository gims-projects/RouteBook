import { Injectable, EventEmitter } from '@angular/core';

// **********
// ********** Models
// **********
import { DeliveryRouteModel } from '../../models/delivery-route.model';
import { DeliveryRouteStopModel } from '../../models/delivery-route-stop.model';
import { DeliveryRouteStopDirectionsModel } from '../../models/delivery-route-stop-directions.model';
import { DeliveryRouteStopProcedureModel } from '../../models/delivery-route-stop-procedure.model';
import { DeliveryRouteStopTaskModel } from '../../models/delivery-route-stop-task.model';

// **********
// ********** Services
// **********
import { DeliveryRoutesService } from '../data/delivery-routes.service';
import { DeliveryRouteStopsService } from '../data/delivery-route-stops.service';
import { DeliveryRouteStopDirectionsService } from '../data/delivery-route-stop-directions.service';
import { DeliveryRouteStopProceduresService } from '../data/delivery-route-stop-procedures.service';
import { DeliveryRouteStopTasksService } from '../data/delivery-route-stop-tasks.service';

@Injectable()
export class DeliveryRoutesViewService {

  constructor( private deliveryRoutesService: DeliveryRoutesService,
               private deliveryRoutesStopsService: DeliveryRouteStopsService,
               private deliveryRoutesStopDirectionsService: DeliveryRouteStopDirectionsService,
               private deliveryRoutesStopProceduresService: DeliveryRouteStopProceduresService,
               private deliveryRoutesStopTasksService: DeliveryRouteStopTasksService
               ) {}

  private currentSelectedDay: number;
  public get CurrentSelectedDay(): number {
    return this.currentSelectedDay;
  }
  public set CurrentSelectedDay(value: number) {
    this.currentSelectedDay = value;
  }

  // **********
  // ********** Delivery Route
  // **********

  // **********
  // ********** Delivery Route Properties
  // **********

  private deliveryRoutes: DeliveryRouteModel[];
  /**
   * Returns an array of Delivery Route records.
   */
  public get DeliveryRoutes(): DeliveryRouteModel[] {
    return this.deliveryRoutes;
  }
  public set DeliveryRoutes(value: DeliveryRouteModel[]) {
    this.deliveryRoutes = value;
  }

  private currentDeliveryRoute: DeliveryRouteModel;
  public get CurrentDeliveryRoute(): DeliveryRouteModel {
    return this.currentDeliveryRoute;
  }
  public set CurrentDeliveryRoute(value: DeliveryRouteModel) {
    this.currentDeliveryRoute = value;
  }

  // **********
  // ********** Delivery Route Events
  // **********

  // public onDeliveryrouteSelected = new EventEmitter<DeliveryRouteModel>();


  // **********
  // ********** Delivery Route Methods
  // **********

  public LoadAllDeliveryRoutes(): void {
    this.deliveryRoutes = this.GetAllDeliveryRoutes();
    this.CurrentDeliveryRoute = this.DeliveryRoutes[0];

  }

  public LoadCurrentRoute(routeID): void {
    this.CurrentDeliveryRoute = this.GetDeliveryRouteByID(routeID);
    this.CurrentDeliveryRoute.Stops = this.GetAllStopsByDeliverRouteID(routeID);
  }

  // **********
  // ********** Delivery Route Functions
  // **********

  /** Gets All Delivery Routes
   * @returns An array containing Delivery Routes.
   */
   GetAllDeliveryRoutes(): DeliveryRouteModel[] {
    return this.deliveryRoutesService.GetAll();
  }

  /** Get a Delivery Route by ID
   * @param routeID A string unique ID of the desired Delivery Route.
   * @returns The desired Delivery Route.
   */
  GetDeliveryRouteByID(routeID: string): DeliveryRouteModel {
    return this.deliveryRoutesService.GetByID( routeID );
  }

  // **********
  // ********** Delivery Route Stop
  // **********

  // Current Delivery Route Stop Methods
  GetAllStopsByDeliverRouteID(routeID: string): DeliveryRouteStopModel[] {
    return this.deliveryRoutesStopsService.GetAllByRouteID( routeID );
  }

  // Current Delivery Route Stop Directions Methods
  GetAllDirectionsForDeliveryRoute(routeID: string): DeliveryRouteStopDirectionsModel[] {
    return this.deliveryRoutesStopDirectionsService.GetAllByRouteID( routeID );
  }

  // Current Delivery Route Stop Procedures Methods
  GetAllProceduresForDeliveryRouteStop(stopID: string): DeliveryRouteStopProcedureModel[] {
    return this.deliveryRoutesStopProceduresService.GetAllByStopID( stopID );
  }

  private routeStopsFilteredByDayOfWeek: DeliveryRouteStopModel[];
  public get RouteStopsFilteredByDayOfWeek(): DeliveryRouteStopModel[] {
    return this.routeStopsFilteredByDayOfWeek;
  }
  public set RouteStopsFilteredByDayOfWeek(value: DeliveryRouteStopModel[]) {
    this.routeStopsFilteredByDayOfWeek = value;
  }

}
