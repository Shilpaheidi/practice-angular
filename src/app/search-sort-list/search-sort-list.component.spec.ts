import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSortListComponent } from './search-sort-list.component';

describe('SearchSortListComponent', () => {
  let component: SearchSortListComponent;
  let fixture: ComponentFixture<SearchSortListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSortListComponent]
    });
    fixture = TestBed.createComponent(SearchSortListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
