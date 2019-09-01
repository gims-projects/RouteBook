import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRouteStopDirectionsReceivingComponent } from './delivery-route-stop-directions-receiving.component';

describe('DeliveryRouteStopDirectionsReceivingComponent', () => {
  let component: DeliveryRouteStopDirectionsReceivingComponent;
  let fixture: ComponentFixture<DeliveryRouteStopDirectionsReceivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryRouteStopDirectionsReceivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRouteStopDirectionsReceivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
