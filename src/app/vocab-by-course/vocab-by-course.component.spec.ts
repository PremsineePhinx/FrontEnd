import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabByCourseComponent } from './vocab-by-course.component';

describe('VocabByCourseComponent', () => {
  let component: VocabByCourseComponent;
  let fixture: ComponentFixture<VocabByCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabByCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabByCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
