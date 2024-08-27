import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesDynamicFormComponent } from './hobbies-dynamic-form.component';

describe('HobbiesDynamicFormComponent', () => {
  let component: HobbiesDynamicFormComponent;
  let fixture: ComponentFixture<HobbiesDynamicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbiesDynamicFormComponent]
    });
    fixture = TestBed.createComponent(HobbiesDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
