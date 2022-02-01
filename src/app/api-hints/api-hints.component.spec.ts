import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHintsComponent } from './api-hints.component';

describe('ApiHintsComponent', () => {
  let component: ApiHintsComponent;
  let fixture: ComponentFixture<ApiHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
