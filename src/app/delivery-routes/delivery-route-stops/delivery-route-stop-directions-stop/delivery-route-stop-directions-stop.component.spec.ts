import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRouteStopDirectionsStopComponent } from './delivery-route-stop-directions-stop.component';

describe('DeliveryRouteStopDirectionsStopComponent', () => {
  let component: DeliveryRouteStopDirectionsStopComponent;
  let fixture: ComponentFixture<DeliveryRouteStopDirectionsStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryRouteStopDirectionsStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRouteStopDirectionsStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
