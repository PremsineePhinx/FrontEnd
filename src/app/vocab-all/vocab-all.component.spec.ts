import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabAllComponent } from './vocab-all.component';

describe('VocabAllComponent', () => {
  let component: VocabAllComponent;
  let fixture: ComponentFixture<VocabAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
