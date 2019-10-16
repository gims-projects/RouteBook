import { Component, OnInit } from '@angular/core';
import { DeliveryRoutesViewService } from '../../services/view/delivery-routes-view.service';
import { DeliveryRouteStopProceduresService } from '../../services/data/delivery-route-stop-procedures.service';
import { DeliveryRouteStopProcedureModel } from '../../models/delivery-route-stop-procedure.model';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gims-routebook-delivery-route-stop-procedures',
  templateUrl: './delivery-route-stop-procedures.component.html',
  styleUrls: ['./delivery-route-stop-procedures.component.css']
})
export class DeliveryRouteStopProceduresComponent implements OnInit {

  procedures: DeliveryRouteStopProcedureModel[];

  constructor(private viewService: DeliveryRoutesViewService,
              private dataService: DeliveryRouteStopProceduresService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.parent.params.subscribe(
      (params: Params) => {
        this.procedures = this.dataService.GetAllByStopID( params.stopID);
      });

  }

}
