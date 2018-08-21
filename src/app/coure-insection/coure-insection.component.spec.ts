import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoureInsectionComponent } from './coure-insection.component';

describe('CoureInsectionComponent', () => {
  let component: CoureInsectionComponent;
  let fixture: ComponentFixture<CoureInsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoureInsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoureInsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
