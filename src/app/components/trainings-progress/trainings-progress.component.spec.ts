import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsProgressComponent } from './trainings-progress.component';

describe('TrainingsProgressComponent', () => {
  let component: TrainingsProgressComponent;
  let fixture: ComponentFixture<TrainingsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingsProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
