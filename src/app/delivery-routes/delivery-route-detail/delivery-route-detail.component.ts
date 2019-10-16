import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

import {
  DeliveryRouteModel
} from '../../delivery-routes/models/delivery-route.model';

import {
  DeliveryRouteStopModel
} from '../../delivery-routes/models/delivery-route-stop.model';

import {
  DeliveryRoutesViewService
} from '../../delivery-routes/services/view/delivery-routes-view.service';

/**
 * The Delivery Route Detail Component displays detail information about the Current Delivery Route.
 * The name of the Current Delivery Route is displayed across the top of the form while on the next
 * row the Delivery Route Stops List is displayed on the left with a <router-outlet> on the right to
 * display detail information about the Current Delivery Route Stop.
 */
@Component({
  selector: 'gims-routebook-delivery-route-detail',
  templateUrl: './delivery-route-detail.component.html',
  styleUrls: ['./delivery-route-detail.component.css']
})
export class DeliveryRouteDetailComponent implements OnInit {

  constructor(private viewService: DeliveryRoutesViewService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.viewService.LoadCurrentRoute(params.routeID);
        this.RouteStopsFilteredByDayOfWeek = this.filterStopsByDayOfWeekID();
      }
    );
  }

  public get CurrentDeliveryRoute(): DeliveryRouteModel {
    return this.viewService.CurrentDeliveryRoute;
  }
  public set CurrentDeliveryRoute(value: DeliveryRouteModel) {
    this.viewService.CurrentDeliveryRoute = value;
  }

  public get CurrentSelectedDay(): number {
    return this.viewService.CurrentSelectedDay;
  }
  public set CurrentSelectedDay(value: number) {
    this.viewService.CurrentSelectedDay = value;
  }

  public get RouteStopsFilteredByDayOfWeek(): DeliveryRouteStopModel[] {
    return this.viewService.RouteStopsFilteredByDayOfWeek;
  }
  public set RouteStopsFilteredByDayOfWeek(value: DeliveryRouteStopModel[]) {
    this.viewService.RouteStopsFilteredByDayOfWeek = value;
  }

  onDayOfWeekSelected(dayOfWeekID: number) {
    this.CurrentSelectedDay = dayOfWeekID;
    this.RouteStopsFilteredByDayOfWeek = this.filterStopsByDayOfWeekID();
  }

  onNewDeliveryRoute() {
    this.router.navigate(['../new'], { relativeTo: this.route });
   }

  onEditDeliveryRoute() {

    this.router.navigate(['/routes/edit/' + this.CurrentDeliveryRoute.ID]);

    // This example is equivalent to the above simpler expression but shows how to build complex routes
    //   for navigaiton.
    // this.router.navigate(['../',this.CurrentDeliveryRouteID,'edit'], {relativeTo: this.route});

  }

  filterStopsByDayOfWeekID(): DeliveryRouteStopModel[] {
    const currentSelectedDayID = this.CurrentSelectedDay;
    const x = this.CurrentDeliveryRoute.Stops.filter(stop => stop.StartDayID === currentSelectedDayID).slice();
    return x;
  }

}
