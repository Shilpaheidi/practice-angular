import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterPaginationComponent } from './search-filter-pagination.component';

describe('SearchFilterPaginationComponent', () => {
  let component: SearchFilterPaginationComponent;
  let fixture: ComponentFixture<SearchFilterPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFilterPaginationComponent]
    });
    fixture = TestBed.createComponent(SearchFilterPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
