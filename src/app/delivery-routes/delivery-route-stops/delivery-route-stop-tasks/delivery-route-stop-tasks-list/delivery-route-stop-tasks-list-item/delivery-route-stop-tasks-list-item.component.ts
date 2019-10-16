import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  DeliveryRouteStopTaskModel
} from 'src/app/delivery-routes/models/delivery-route-stop-task.model';
import {
  HttpClient
} from '@angular/common/http';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'gims-routebook-delivery-route-stop-tasks-list-item',
  templateUrl: './delivery-route-stop-tasks-list-item.component.html',
  styleUrls: ['./delivery-route-stop-tasks-list-item.component.css']
})
export class DeliveryRouteStopTasksListItemComponent implements OnInit {

  myTemplate: string;
  showDetail = false;

  @Input() CurrentTask: DeliveryRouteStopTaskModel;

  constructor(private http: HttpClient,
              public  sanitizer: DomSanitizer) {}

ngOnInit() {

    //   this.http.get(this.CurrentTask.UrlToHTMLFile, {
    //       responseType: 'text'
    //     })
    //     .subscribe(
    //       (html: string) => {
    //         this.myTemplate = html;
    //       }
    //     );
    }

    ToggleDetail() {
      this.showDetail = !this.showDetail;
    }
  }
