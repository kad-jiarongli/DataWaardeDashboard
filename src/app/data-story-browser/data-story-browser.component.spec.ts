import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStoryBrowserComponent } from './data-story-browser.component';

describe('DataStoryBrowserComponent', () => {
  let component: DataStoryBrowserComponent;
  let fixture: ComponentFixture<DataStoryBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStoryBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStoryBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
