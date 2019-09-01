export class DeliveryRouteStopModel {
public ID: string;
public RouteID: string;
public StopNumber: number;
public Name: string;
public Address1: string;
public Address2: string;
public City: string;
public State: string;
public ZipCode: string;
public StartDayID: number; // Monday, Tuesday, Wednesday, etc ...
public ExpectedTimeToCompleteUnits: number; // The units of the length of time needed to complete a task. 1, 2.5, etc.
public ExpectedTimeToCompleteUOM: string; // The unit of measure for the length of time needed to complete a task. Minute, Hour, Day, etc.
public AverageTimeToCompleteUnits: number;
public AverageTimeToCompleteUOM: string;
public EmbeddedMapURL: string;

constructor(id: string,
            routeID: string,
            stopNumber: number,
            name: string,
            address1: string,
            address2: string,
            city: string,
            state: string,
            zipCode: string,
            startDayID: number) {

              this.ID = id,
              this.RouteID = routeID,
              this.StopNumber = stopNumber,
              this.Name = name,
              this.Address1 = address1,
              this.Address2 = address2,
              this.City = city,
              this.State = state,
              this.ZipCode = zipCode;
              this.StartDayID = startDayID;

              // Set default values.
              this.ExpectedTimeToCompleteUnits = 0;
              this.ExpectedTimeToCompleteUOM = '';
              this.AverageTimeToCompleteUnits = 0;
              this.AverageTimeToCompleteUOM = '';
              this.EmbeddedMapURL = '';
            }
}
