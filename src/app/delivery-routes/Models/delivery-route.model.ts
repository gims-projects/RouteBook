import { DeliveryRouteStopModel } from './delivery-route-stop.model';

export class DeliveryRouteModel {
  public ID: string;
  public Name: string;
  public DriverID: string;
  public VehicleID: string;
  public Stops: DeliveryRouteStopModel[];

  constructor(id: string, name: string, driverID: string, vehicleID: string, stops: DeliveryRouteStopModel[]) {
    this.ID = id;
    this.Name = name;
    this.DriverID = driverID;
    this.VehicleID = vehicleID;
    this.Stops = stops;
  }

}
