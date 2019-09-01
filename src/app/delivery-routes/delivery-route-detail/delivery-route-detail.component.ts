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
} from 'src/app/delivery-routes/Models/delivery-route.model';
import {
  DeliveryRouteStopModel
} from '../Models/delivery-route-stop.model';
import {
  DeliveryRoutesService
} from 'src/app/delivery-routes/Services/Data/delivery-routes.service';

@Component({
  selector: 'gims-routebook-delivery-route-detail',
  templateUrl: './delivery-route-detail.component.html',
  styleUrls: ['./delivery-route-detail.component.css']
})
export class DeliveryRouteDetailComponent implements OnInit {

  CurrentDeliveryRoute: DeliveryRouteModel;
  CurrentDeliveryRouteID: string;
  CurrentSelectedDay: number;
  RouteStopsFilteredByDayOfWeek: DeliveryRouteStopModel[];

  constructor(private deliveryRouteService: DeliveryRoutesService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.CurrentDeliveryRouteID = params.routeID;
        this.CurrentDeliveryRoute = this.deliveryRouteService.GetByID(this.CurrentDeliveryRouteID);
        this.CurrentDeliveryRoute.Stops = this.deliveryRouteService.GetDeliveryRouteStops(this.CurrentDeliveryRouteID);
        this.RouteStopsFilteredByDayOfWeek = this.filterStopsByDayOfWeekID();
      }
    );

  }

  onDayOfWeekSelected(dayOfWeekID: number) {
    this.CurrentSelectedDay = dayOfWeekID;
    this.RouteStopsFilteredByDayOfWeek = this.filterStopsByDayOfWeekID();
  }

  onEditDeliveryRoute() {

    this.router.navigate(['edit'], {
      relativeTo: this.route
    });

    // This example is equivalent to the above simpler expression but shows how to build complex routes
    //   for navigaiton.
    // this.router.navigate(['../',this.CurrentDeliveryRouteID,'edit'], {relativeTo: this.route});

  }

  filterStopsByDayOfWeekID(): DeliveryRouteStopModel[] {
    return this.CurrentDeliveryRoute.Stops.filter(stop => stop.StartDayID === this.CurrentSelectedDay).slice();
  }

}
