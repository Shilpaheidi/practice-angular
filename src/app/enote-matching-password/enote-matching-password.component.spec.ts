import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnoteMatchingPasswordComponent } from './enote-matching-password.component';

describe('EnoteMatchingPasswordComponent', () => {
  let component: EnoteMatchingPasswordComponent;
  let fixture: ComponentFixture<EnoteMatchingPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnoteMatchingPasswordComponent]
    });
    fixture = TestBed.createComponent(EnoteMatchingPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
