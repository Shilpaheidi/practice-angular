import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingPasswordComponent } from './matching-password.component';

describe('MatchingPasswordComponent', () => {
  let component: MatchingPasswordComponent;
  let fixture: ComponentFixture<MatchingPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchingPasswordComponent]
    });
    fixture = TestBed.createComponent(MatchingPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
