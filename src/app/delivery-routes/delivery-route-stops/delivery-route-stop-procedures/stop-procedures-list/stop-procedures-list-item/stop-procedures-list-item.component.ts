import { Component, OnInit, Input } from '@angular/core';
import { DeliveryRouteStopProcedureModel } from 'src/app/delivery-routes/models/delivery-route-stop-procedure.model';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gims-routebook-stop-procedures-list-item',
  templateUrl: './stop-procedures-list-item.component.html',
  styleUrls: ['./stop-procedures-list-item.component.css']
})
export class StopProceduresListItemComponent implements OnInit {

  myTemplate: string;
  showDetail = false;

  @Input() CurrentProcedure: DeliveryRouteStopProcedureModel;

  constructor(private http: HttpClient,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.http.get(this.CurrentProcedure.UrlToHTMLFile, { responseType: 'text' })
      .subscribe(
        (html: string) => {
          this.myTemplate = html;
        }
      );
  }

  ToggleDetail() {
    this.showDetail = !this.showDetail;
  }
}
