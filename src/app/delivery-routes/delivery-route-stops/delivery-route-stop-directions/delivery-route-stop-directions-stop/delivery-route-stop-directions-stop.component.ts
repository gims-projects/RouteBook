import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DeliveryRoutesViewService } from '../../../services/view/delivery-routes-view.service';

@Component({
  selector: 'gims-routebook-delivery-route-stop-directions-stop',
  templateUrl: './delivery-route-stop-directions-stop.component.html',
  styleUrls: ['./delivery-route-stop-directions-stop.component.css']
})
export class DeliveryRouteStopDirectionsStopComponent implements OnInit {

  @Input() public EmbeddedMapURL: string;


  // CurrentDeliveryRouteStopID: string;

  constructor(private viewService: DeliveryRoutesViewService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params: Params) => {
        // this.CurrentDeliveryRouteStopID = params.stopID;
        this.EmbeddedMapURL = this.viewService.RouteStopsFilteredByDayOfWeek.find(x => x.ID === params.stopID).EmbeddedMapURL;
      });
  }

}
