import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFrequencyComponent } from './update-frequency.component';

describe('UpdateFrequencyComponent', () => {
  let component: UpdateFrequencyComponent;
  let fixture: ComponentFixture<UpdateFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFrequencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
