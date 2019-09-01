import {
  DeliveryRouteStopModel
} from '../../Models/delivery-route-stop.model';

export class DeliveryRouteStopsService {

  private deliveryRouteStops: DeliveryRouteStopModel[];

  constructor() {

    this.loadData();

  }

  public GetAllByRouteID(routeID: string): DeliveryRouteStopModel[] {

    return this.deliveryRouteStops.filter(currentStop => currentStop.RouteID.toUpperCase() === routeID.toUpperCase()).slice();

  }

  public GetByID(id: string): DeliveryRouteStopModel {

    return this.deliveryRouteStops.find(currentStop => currentStop.ID.toUpperCase() === id.toUpperCase());

  }

  private loadData() {

    this.deliveryRouteStops = [

      // ********** Route 1 Stops - Universal Studios
      // ***** Monday Stops
      // ***** Index = 0
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP01', 'ROUTE01', 1, 'Route 1 * Day 1 * Stop 1', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32836', 1),

      // ***** Tuesday Stops
      // ***** Index = 1
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP01', 'ROUTE01', 1, 'Route 1 * Day 2 * Stop 1', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 2),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP02', 'ROUTE01', 2, 'Route 1 * Day 2 * Stop 2', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 2),

      // ***** Wednesday Stops
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP01', 'ROUTE01', 1, 'Route 1 * Day 3 * Stop 1', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 3),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP02', 'ROUTE01', 2, 'Route 1 * Day 3 * Stop 2', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 3),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP03', 'ROUTE01', 3, 'Route 1 * Day 3 * Stop 3', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 3),

      // ***** Thursday Stops
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP01', 'ROUTE01', 1, 'Route 1 * Day 4 * Stop 1', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 4),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP02', 'ROUTE01', 2, 'Route 1 * Day 4 * Stop 2', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 4),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP03', 'ROUTE01', 3, 'Route 1 * Day 4 * Stop 3', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 4),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP04', 'ROUTE01', 4, 'Route 1 * Day 4 * Stop 4', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 4),

      // ***** Friday Stops
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP01', 'ROUTE01', 1, 'Route 1 * Day 5 * Stop 1', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 5),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP02', 'ROUTE01', 2, 'Route 1 * Day 5 * Stop 2', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 5),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP03', 'ROUTE01', 3, 'Route 1 * Day 5 * Stop 3', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 5),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP04', 'ROUTE01', 4, 'Route 1 * Day 5 * Stop 4', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 5),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP05', 'ROUTE01', 5, 'Route 1 * Day 5 * Stop 5', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 5),


      // ********** Route 2 Stops - Walt Disney World
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-00', 'ROUTE02', 0, 'Beyda & Associates Warehouse', '10227 Genral Drive', '', 'Orlando', 'FL', '32824', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-01', 'ROUTE02', 1, 'Panchito\'s Gifts and Sundries', '', '', 'Kissimme', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-02', 'ROUTE02', 2, 'Zawadi Marketplace', '2901 W Osceola Pkwy', '', 'Orlando', 'FL', '32830', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-03', 'ROUTE02', 3, 'Johari Treasures', '4701 W Osceola Pkwy', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-04', 'ROUTE02', 4, 'Sport Goofy Gifts and Sundries', '', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-05', 'ROUTE02', 5, 'Maestro Mickey\'s', '', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-06', 'ROUTE02', 6, 'Donald\s Double Feature', '1902 Buena Vista Dr', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-07', 'ROUTE02', 7, 'Ink & Paint Shop', '1850 Animation Way', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-08', 'ROUTE02', 8, 'Everything Pop & Dining', '1050 Century Dr', '', 'Orlando', 'FL', '32830', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-09', 'ROUTE02', 9, 'Calypso Trading Post', '1114 Cayman Way', '', 'Lake Buena Vista', 'FL', '32830', 1),


      // ********** Route 3 Stops - Kennedy Space Center
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP01', 'ROUTE03', 1, 'Route 3 * Day 1 * Stop 1', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 4)
    ];

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-01', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3509.3458983111673!2d-81.59087065296872!3d28.4088179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88e77d9c2e084c51%3A0x6e737cdf79d59bc!2s10227%20General%20Drive%2C%20Orlando%2C%20FL!3m2!1d28.417147999999997!2d-81.38703199999999!4m5!1s0x88dd7e01dc8b4ac93%3A0x4a46c7a12b3aee68!2sM.%20Mouse%20Mercantile%2C%20Orlando%2C%20FL%2032836!3m2!1d28.4107445!2d-81.5878522!5e0!3m2!1sen!2sus!4v1566741759376!5m2!1sen!2sus');

  }

  private setMapUrlForStop(stopID: string, mapUrl: string) {

    // tslint:disable-next-line: max-line-length
    this.deliveryRouteStops[this.deliveryRouteStops.findIndex(m => m.ID === stopID)].EmbeddedMapURL = mapUrl;

  }
}