import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { MapViewerComponent } from './Shared/Components/map-viewer/map-viewer.component';
import { DayPickerComponent } from './Shared/Components/day-picker/day-picker.component';
import { gimsDropdownDirective } from './Shared/Directives/Dropdown.directive';

import { DeliveryRouteNotSelectedComponent } from './delivery-routes/delivery-route-not-selected/delivery-route-not-selected.component';
import { DeliveryRoutesComponent } from './delivery-routes/delivery-routes.component';
import { DeliveryRoutesListComponent } from './Delivery-Routes/delivery-routes-list/delivery-routes-list.component';
// tslint:disable-next-line: max-line-length
import { DeliveryRoutesListItemComponent } from './Delivery-Routes/Delivery-Routes-List/delivery-routes-list-item/delivery-routes-list-item.component';
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
import { DeliveryRouteStopDirectionsStopComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions-stop/delivery-route-stop-directions-stop.component';
import { DeliveryRouteStopDirectionsReceivingComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions-receiving/delivery-route-stop-directions-receiving.component';
import { DeliveryRouteStopDirectionsLocationComponent } from './delivery-routes/delivery-route-stops/delivery-route-stop-directions-location/delivery-route-stop-directions-location.component';

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
    DriversComponent,
    VehiclesComponent,
    ReportsComponent,
    DeliveryRouteStopDirectionsStopComponent,
    DeliveryRouteStopDirectionsReceivingComponent,
    DeliveryRouteStopDirectionsLocationComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
