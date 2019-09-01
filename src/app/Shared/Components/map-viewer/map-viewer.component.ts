import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gims-routebook-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.css']
})
export class MapViewerComponent implements OnInit {

  @Input() public EmbeddedMapUrl: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
