import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModelBrowserComponent } from './data-model-browser.component';

describe('DataModelBrowserComponent', () => {
  let component: DataModelBrowserComponent;
  let fixture: ComponentFixture<DataModelBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataModelBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModelBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
