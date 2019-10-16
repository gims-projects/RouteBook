import { Component, OnInit, Input } from '@angular/core';
import { DeliveryRouteStopProcedureModel } from 'src/app/delivery-routes/models/delivery-route-stop-procedure.model';

@Component({
  selector: 'gims-routebook-stop-procedures-list',
  templateUrl: './stop-procedures-list.component.html',
  styleUrls: ['./stop-procedures-list.component.css']
})
export class StopProceduresListComponent implements OnInit {

  @Input() Procedures: DeliveryRouteStopProcedureModel[];

  constructor() { }

  ngOnInit() {
  }

}
