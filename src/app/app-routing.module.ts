import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryRoutesComponent } from './delivery-routes/delivery-routes.component';
import { DeliveryRouteNotSelectedComponent } from './delivery-routes/delivery-route-not-selected/delivery-route-not-selected.component';
import { DeliveryRouteDetailComponent } from './delivery-routes/delivery-route-detail/delivery-route-detail.component';
import { DeliveryRouteMaintenanceComponent } from './delivery-routes/delivery-route-maintenance/delivery-route-maintenance.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDetailComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-detail/delivery-route-stop-detail.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopProceduresComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-procedures/delivery-route-stop-procedures.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDirectionsLocationComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions/delivery-route-stop-directions-location/delivery-route-stop-directions-location.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDirectionsReceivingComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions/delivery-route-stop-directions-receiving/delivery-route-stop-directions-receiving.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDirectionsStopComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions/delivery-route-stop-directions-stop/delivery-route-stop-directions-stop.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopNotSelectedComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-not-selected/delivery-route-stop-not-selected.component';

import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportsComponent } from './reports/reports.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopTasksComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-tasks/delivery-route-stop-tasks.component';

const routes: Routes = [
  {path: '', redirectTo: '/routes', pathMatch: 'full'},
  {path: 'routes', component: DeliveryRoutesComponent, children: [
    {path: '', component: DeliveryRouteNotSelectedComponent},
    {path: 'new', component: DeliveryRouteMaintenanceComponent},
    {path: 'edit/:routeID', component: DeliveryRouteMaintenanceComponent},
    {path: ':routeID', component: DeliveryRouteDetailComponent, children: [
      {path: '', component: DeliveryRouteStopNotSelectedComponent},
      {path: ':stopID', component: DeliveryRouteStopDetailComponent, children: [
        {path: '', redirectTo: 'Tasks', pathMatch: 'prefix'},
        {path: 'Tasks', component: DeliveryRouteStopTasksComponent},
        {path: 'Directions', redirectTo: 'Directions/Stop'},
        {path: 'Directions/Stop', component: DeliveryRouteStopDirectionsStopComponent},
        {path: 'Directions/Receiving', component: DeliveryRouteStopDirectionsReceivingComponent},
        {path: 'Directions/Location', component: DeliveryRouteStopDirectionsLocationComponent},
        {path: 'Procedures', component: DeliveryRouteStopProceduresComponent}
      ]}
    ]},
  ]},
  {path: 'drivers', component: DriversComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'reports', component: ReportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
