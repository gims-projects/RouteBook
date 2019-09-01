import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DeliveryRouteModel } from '../Models/delivery-route.model';
// import { DeliveryRoutesService } from 'src/app/delivery-routes/Services/Data/delivery-routes.service';
import { DeliveryRoutesViewService } from '../Services/view/delivery-routes-view.service'

@Component({
  selector: 'gims-routebook-delivery-routes-list',
  templateUrl: './delivery-routes-list.component.html',
  styleUrls: ['./delivery-routes-list.component.css']
})
export class DeliveryRoutesListComponent implements OnInit {

  deliveryRoutes: DeliveryRouteModel[];

  constructor(private deliveryRoutesService: DeliveryRoutesViewService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {

    // this.deliveryRoutes = this.deliveryRoutesService.DeliveryRoutesData;

 }

 onNewDeliveryRoute(){
  this.router.navigate(['new'],{relativeTo: this.route})
 }

}
