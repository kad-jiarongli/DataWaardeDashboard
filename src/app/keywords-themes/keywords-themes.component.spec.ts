import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsThemesComponent } from './keywords-themes.component';

describe('KeywordsThemesComponent', () => {
  let component: KeywordsThemesComponent;
  let fixture: ComponentFixture<KeywordsThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeywordsThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
