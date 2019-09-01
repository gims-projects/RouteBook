import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'gims-routebook-delivery-route-stop-directions',
  templateUrl: './delivery-route-stop-directions.component.html',
  styleUrls: ['./delivery-route-stop-directions.component.css']
})
export class DeliveryRouteStopDirectionsComponent implements OnInit {

  @Input() public EmbeddedMapURL: string;

  constructor() {}

  ngOnInit() {}
}
