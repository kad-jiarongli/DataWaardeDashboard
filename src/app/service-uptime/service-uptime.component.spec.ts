import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUptimeComponent } from './service-uptime.component';

describe('ServiceUptimeComponent', () => {
  let component: ServiceUptimeComponent;
  let fixture: ComponentFixture<ServiceUptimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceUptimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceUptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
