import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDynamicFormComponent } from './new-dynamic-form.component';

describe('NewDynamicFormComponent', () => {
  let component: NewDynamicFormComponent;
  let fixture: ComponentFixture<NewDynamicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDynamicFormComponent]
    });
    fixture = TestBed.createComponent(NewDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
