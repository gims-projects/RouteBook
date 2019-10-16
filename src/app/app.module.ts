import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MapViewerComponent } from './shared/components/map-viewer/map-viewer.component';
import { DayPickerComponent } from './shared/components/day-picker/day-picker.component';
import { gimsDropdownDirective } from './shared/directives/dropdown.directive';

import { DeliveryRouteNotSelectedComponent } from './delivery-routes/delivery-route-not-selected/delivery-route-not-selected.component';
import { DeliveryRoutesComponent } from './delivery-routes/delivery-routes.component';
import { DeliveryRoutesListComponent } from './delivery-routes/delivery-routes-list/delivery-routes-list.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRoutesListItemComponent } from './delivery-routes/delivery-routes-list/delivery-routes-list-item/delivery-routes-list-item.component';
import { DeliveryRouteDetailComponent } from './delivery-routes/delivery-route-detail/delivery-route-detail.component';
import { DeliveryRouteMaintenanceComponent } from './delivery-routes/delivery-route-maintenance/delivery-route-maintenance.component';
import { DeliveryRouteStopsComponent } from './delivery-routes/delivery-route-stops/delivery-route-stops.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopsListComponent } from './delivery-routes/delivery-route-stops/delivery-route-stops-list/delivery-route-stops-list.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopsListItemComponent } from './delivery-routes/delivery-route-stops/delivery-route-stops-list/delivery-route-stops-list-item/delivery-route-stops-list-item.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDetailComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-detail/delivery-route-stop-detail.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDirectionsComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions/delivery-route-stop-directions.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopProceduresComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-procedures/delivery-route-stop-procedures.component';

import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ReportsComponent } from './reports/reports.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDirectionsStopComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions/delivery-route-stop-directions-stop/delivery-route-stop-directions-stop.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDirectionsReceivingComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions/delivery-route-stop-directions-receiving/delivery-route-stop-directions-receiving.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopDirectionsLocationComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions/delivery-route-stop-directions-location/delivery-route-stop-directions-location.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopNotSelectedComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-not-selected/delivery-route-stop-not-selected.component';
// tslint:disable-next-line: max-line-length
import { StopProceduresListComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-procedures/stop-procedures-list/stop-procedures-list.component';
// tslint:disable-next-line: max-line-length
import { StopProceduresListItemComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-procedures/stop-procedures-list/stop-procedures-list-item/stop-procedures-list-item.component';
import { HttpClientModule } from '@angular/common/http';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopTasksComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-tasks/delivery-route-stop-tasks.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopTasksListComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-tasks/delivery-route-stop-tasks-list/delivery-route-stop-tasks-list.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRouteStopTasksListItemComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-tasks/delivery-route-stop-tasks-list/delivery-route-stop-tasks-list-item/delivery-route-stop-tasks-list-item.component';

// tslint:disable-next-line: max-line-length
// import { DeliveryRouteStopTasksListItemComponent } from './delivery-routes/stops/tasks/list/item/delivery-route-stop-tasks-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapViewerComponent,
    DayPickerComponent,
    gimsDropdownDirective,
    DeliveryRouteNotSelectedComponent,
    DeliveryRoutesComponent,
    DeliveryRoutesListComponent,
    DeliveryRoutesListItemComponent,
    DeliveryRouteDetailComponent,
    DeliveryRouteMaintenanceComponent,
    DeliveryRouteStopsComponent,
    DeliveryRouteStopsListComponent,
    DeliveryRouteStopsListItemComponent,
    DeliveryRouteStopDetailComponent,
    DeliveryRouteStopDirectionsComponent,
    DeliveryRouteStopProceduresComponent,
    DeliveryRouteStopDirectionsStopComponent,
    DeliveryRouteStopDirectionsReceivingComponent,
    DeliveryRouteStopDirectionsLocationComponent,
    DeliveryRouteStopNotSelectedComponent,
    StopProceduresListComponent,
    StopProceduresListItemComponent,
    DeliveryRouteStopTasksComponent,
    DeliveryRouteStopTasksListComponent,
    DeliveryRouteStopTasksListItemComponent,
    DriversComponent,
    VehiclesComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
