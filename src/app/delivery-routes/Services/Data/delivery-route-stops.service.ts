import {
  DeliveryRouteStopModel
} from '../../models/delivery-route-stop.model';

export class DeliveryRouteStopsService {

  private deliveryRouteStops: DeliveryRouteStopModel[];

  constructor() {

    this.loadData();

  }

  public GetAllByRouteID(routeID: string): DeliveryRouteStopModel[] {

    return this.deliveryRouteStops.filter(currentStop => currentStop.RouteID.toUpperCase() === routeID.toUpperCase()).slice();

  }

  public GetAllByRouteIDAndDayID(routeID: string, dayID: number) {

    return this.GetAllByRouteID(routeID).filter(stop => stop.StartDayID === dayID).slice();

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
      new DeliveryRouteStopModel('STOP-02-MON-00', 'ROUTE02', 0, 'Beyda & Associates Warehouse', '10227 Genral Drive', '', 'Orlando', 'FL', '32824', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-01', 'ROUTE02', 1, 'Panchito\'s Gifts and Sundries', '', '', 'Kissimme', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-02', 'ROUTE02', 2, 'Zawadi Marketplace', '2901 W Osceola Pkwy', '', 'Orlando', 'FL', '32830', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-03', 'ROUTE02', 3, 'Johari Treasures', '4701 W Osceola Pkwy', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-04', 'ROUTE02', 4, 'Sport Goofy Gifts and Sundries', '', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-05', 'ROUTE02', 5, 'Maestro Mickey\'s', '', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-06', 'ROUTE02', 6, 'Donald\s Double Feature', '1902 Buena Vista Dr', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-07', 'ROUTE02', 7, 'Ink & Paint Shop', '1850 Animation Way', '', 'Kissimmee', 'FL', '34747', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-08', 'ROUTE02', 8, 'Everything Pop & Dining', '1050 Century Dr', '', 'Orlando', 'FL', '32830', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-09', 'ROUTE02', 9, 'Calypso Trading Post', '1114 Cayman Way', '', 'Lake Buena Vista', 'FL', '32830', 1),
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP-02-MON-99', 'ROUTE02', 0, 'Beyda & Associates Warehouse', '10227 Genral Drive', '', 'Orlando', 'FL', '32824', 1),


      // ********** Route 3 Stops - Kennedy Space Center
      // tslint:disable-next-line: max-line-length
      new DeliveryRouteStopModel('STOP01', 'ROUTE03', 1, 'Route 3 * Day 1 * Stop 1', 'Address Line 1', 'Address Line 2', 'Orlando', 'FL', '32824', 4)
    ];


    // ***** WDW - Monday - Panchitos
    const startAddress = '10227%20General%20Drive%2C%20Orlando%2C%20FL';
    const endAddress = 'Panchitos%20Gifts%20and%20Sundries';
    // const endAddressLongitude = '28.3626702';
    // const endAddressLatitude = '-81.5729217';
    const endAddressLongitude = '28.354197799999998';
    const endAddressLatitude = '-81.6057241';


    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-01', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d112320.8607569866!2d-81.55001775255919!3d28.388255518694233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x88e77d9c2e084c51%3A0x6e737cdf79d59bc!2s' + startAddress + '!3m2!1d28.417147999999997!2d-81.38703199999999!4m5!1s0x88dd7ef7a6b6913d%3A0x2ad996788f88cca7!2s' + endAddress + '!3m2!1d' + endAddressLongitude + '!2d' + endAddressLatitude + '!5e0!3m2!1sen!2sus!4v1567740159643!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-02', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d14044.41474405211!2d-81.5867372!3d28.3557147!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7ef7a6b6913d%3A0x2ad996788f88cca7!2sPanchitos%20Gifts%20and%20Sundries!3m2!1d28.3626702!2d-81.5729217!4m5!1s0x88dd7c27624e4b3b%3A0x9f3525d79ac8cc70!2sZawadi%20Marketplace!3m2!1d28.3522912!2d-81.6034368!5e0!3m2!1sen!2sus!4v1567733405762!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-03', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d3511.219616697042!2d-81.6061787!3d28.3522092!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7c27624e4b3b%3A0x9f3525d79ac8cc70!2sZawadi%20Marketplace!3m2!1d28.3522912!2d-81.6034368!4m5!1s0x88dd7c27b0e1aefb%3A0xc8990349d593f484!2sJohari%20Treasures!3m2!1d28.354197799999998!2d-81.6057241!5e0!3m2!1sen!2sus!4v1567733632975!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-04', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d14045.306518681831!2d-81.5892787!3d28.348973!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7c27b0e1aefb%3A0xc8990349d593f484!2sJohari%20Treasures!3m2!1d28.354197799999998!2d-81.6057241!4m5!1s0x88dd7ee9ef46a0e9%3A0xb2daa19ebaed6fe8!2sSport%20Goofy%20Gifts%20and%20Sundries!3m2!1d28.3434165!2d-81.5751123!5e0!3m2!1sen!2sus!4v1567733698457!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-05', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d3511.573392697976!2d-81.5743233!3d28.3415093!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7ee9ef46a0e9%3A0xb2daa19ebaed6fe8!2sSport%20Goofy%20Gifts%20and%20Sundries!3m2!1d28.3434165!2d-81.5751123!4m5!1s0x88dd7ec2e2cb5d4b%3A0x32d114bc3bab66ce!2sMaestro%20Mickeys%2C%20Kissimmee%2C%20FL!3m2!1d28.3395223!2d-81.57262449999999!5e0!3m2!1sen!2sus!4v1567733748208!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-06', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d3511.6893031714812!2d-81.5717932!3d28.3380028!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7ec2e2cb5d4b%3A0x32d114bc3bab66ce!2sMaestro%20Mickeys%2C%20Kissimmee%2C%20FL!3m2!1d28.3395223!2d-81.57262449999999!4m5!1s0x88dd7ec497eb62dd%3A0x3d0849a4f20ff004!2sDonald%E2%80%99s%20Double%20Feature!3m2!1d28.3357407!2d-81.57201649999999!5e0!3m2!1sen!2sus!4v1567733798009!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-07', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d14045.967304083115!2d-81.5652113!3d28.3439766!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7ec497eb62dd%3A0x3d0849a4f20ff004!2sDonald%E2%80%99s%20Double%20Feature!3m2!1d28.3357407!2d-81.57201649999999!4m5!1s0x88dd7f10783d45b7%3A0xa699f2864c4e3fb3!2sInk%20%26%20Paint%20Shop!3m2!1d28.350354399999997!2d-81.5485834!5e0!3m2!1sen!2sus!4v1567733850730!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-08', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d3511.210463099004!2d-81.5465418!3d28.352486!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7f10783d45b7%3A0xa699f2864c4e3fb3!2sInk%20%26%20Paint%20Shop!3m2!1d28.350354399999997!2d-81.5485834!4m5!1s0x88dd7f118bb8993f%3A0x3ce1b75060a4e8c4!2sEverything%20POP%20Shopping%20%26%20Dining!3m2!1d28.3503638!2d-81.5430111!5e0!3m2!1sen!2sus!4v1567733893395!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-09', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d14044.175090376155!2d-81.5420938!3d28.3575262!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7f118bb8993f%3A0x3ce1b75060a4e8c4!2sEverything%20POP%20Shopping%20%26%20Dining!3m2!1d28.3503638!2d-81.5430111!4m5!1s0x88dd7f0a142fa5bf%3A0x5f0da7a3b0358a0a!2sCalypso%20Trading%20Post!3m2!1d28.3626045!2d-81.5418308!5e0!3m2!1sen!2sus!4v1567733952409!5m2!1sen!2sus');

    // tslint:disable-next-line: max-line-length
    this.setMapUrlForStop('STOP-02-MON-99', 'https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d56162.043266031666!2d-81.4612198!3d28.3852106!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x88dd7f0a142fa5bf%3A0x5f0da7a3b0358a0a!2sCalypso%20Trading%20Post!3m2!1d28.3626045!2d-81.5418308!4m5!1s0x88e77d9c2e084c51%3A0x6e737cdf79d59bc!2s10227%20General%20Drive%2C%20Orlando%2C%20FL!3m2!1d28.417147999999997!2d-81.38703199999999!5e0!3m2!1sen!2sus!4v1567734042756!5m2!1sen!2sus');
  }

  private setMapUrlForStop(stopID: string, mapUrl: string): void {

    // tslint:disable-next-line: max-line-length
    this.deliveryRouteStops[this.deliveryRouteStops.findIndex(m => m.ID === stopID)].EmbeddedMapURL = mapUrl;

  }
}