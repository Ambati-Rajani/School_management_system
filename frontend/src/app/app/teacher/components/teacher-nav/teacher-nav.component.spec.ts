import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNavComponent } from './teacher-nav.component';

describe('TeacherNavComponent', () => {
  let component: TeacherNavComponent;
  let fixture: ComponentFixture<TeacherNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
