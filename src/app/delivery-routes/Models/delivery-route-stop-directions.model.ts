export class DeliveryRouteStopDirectionsModel {
  public ID: string;
  public StopID: string;
  public DirectionsTypeID: string; // Location, Recieving, Stock
  public Step: string; // Possible format Major.Minor.Step ie. 0000.000.00
  public IconURL: string;
  public MapURL: string; // URL for the map to display for this segment
  public Text: string;
}
