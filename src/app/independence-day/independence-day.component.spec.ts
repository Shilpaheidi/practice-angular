import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependenceDayComponent } from './independence-day.component';

describe('IndependenceDayComponent', () => {
  let component: IndependenceDayComponent;
  let fixture: ComponentFixture<IndependenceDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndependenceDayComponent]
    });
    fixture = TestBed.createComponent(IndependenceDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
