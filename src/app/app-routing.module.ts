import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryRoutesComponent } from './delivery-routes/delivery-routes.component';
import { DeliveryRouteNotSelectedComponent } from './delivery-routes/delivery-route-not-selected/delivery-route-not-selected.component';
import { DeliveryRouteDetailComponent } from './delivery-routes/delivery-route-detail/delivery-route-detail.component';
import { DeliveryRouteMaintenanceComponent } from './delivery-routes/delivery-route-maintenance/delivery-route-maintenance.component';
import { DeliveryRouteStopDetailComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-detail/delivery-route-stop-detail.component';

import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportsComponent } from './reports/reports.component';
import { DeliveryRouteStopDirectionsComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions/delivery-route-stop-directions.component';
import { DeliveryRouteStopProceduresComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-procedures/delivery-route-stop-procedures.component';
import { DeliveryRouteStopDirectionsLocationComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions-location/delivery-route-stop-directions-location.component';
import { DeliveryRouteStopDirectionsReceivingComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions-receiving/delivery-route-stop-directions-receiving.component';
import { DeliveryRouteStopDirectionsStopComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions-stop/delivery-route-stop-directions-stop.component';


const routes: Routes = [
  {path: '', redirectTo: '/routes', pathMatch: 'full'},
  {path: 'routes', component: DeliveryRoutesComponent, children: [
    {path: '', component: DeliveryRouteNotSelectedComponent},
    {path: 'new', component: DeliveryRouteMaintenanceComponent},
    {path: ':routeID', component: DeliveryRouteDetailComponent, children: [
      {path: ':stopID', component: DeliveryRouteStopDetailComponent, children: [
        {path: 'Directions', component: DeliveryRouteStopDirectionsComponent},
        {path: 'Directions/Stop', component: DeliveryRouteStopDirectionsStopComponent},
        {path: 'Directions/Receiving', component: DeliveryRouteStopDirectionsReceivingComponent},
        {path: 'Directions/Location', component: DeliveryRouteStopDirectionsLocationComponent},
        {path: 'Procedures', component: DeliveryRouteStopProceduresComponent}
      ]}
    ]},
    {path: ':routeID/edit', component: DeliveryRouteMaintenanceComponent},
  ]},
  {path: 'drivers', component: DriversComponent},
  {path: 'vehicles', component: VehiclesComponent},
  {path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
