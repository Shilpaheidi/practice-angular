import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  items: any[] = [];
  currentPage: number = 1;
  totalItems: number = 0;
  itemsPerPage: number = 10;

  constructor(private itemsservice: ItemService) {}
  ngOnInit() {
    this.loadItems();
  }

  loadItems(): void {
    this.itemsservice
      .getItems(this.currentPage, this.itemsPerPage)
      .subscribe((response) => {
        this.items = response.body;
        this.totalItems = Number(response.headers.get('X-Total-Count'));
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadItems();
  }
}
