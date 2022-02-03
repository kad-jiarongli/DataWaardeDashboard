import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityMetricsComponent } from './quality-metrics.component';

describe('QualityMetricsComponent', () => {
  let component: QualityMetricsComponent;
  let fixture: ComponentFixture<QualityMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
