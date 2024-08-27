import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter-pagination',
  templateUrl: './search-filter-pagination.component.html',
  styleUrls: ['./search-filter-pagination.component.scss'],
})
export class SearchFilterPaginationComponent {
  items: any[] = [
    { id: 1, product: 'Product1', user: 'User1' },
    { id: 2, product: 'Product2', user: 'User2' },
    { id: 3, product: 'Product3', user: 'User3' },
    { id: 4, product: 'Product4', user: 'User4' },
    { id: 5, product: 'Product5', user: 'User5' },
    { id: 6, product: 'Product6', user: 'User6' },
    { id: 7, product: 'Product7', user: 'User7' },
    { id: 8, product: 'Product8', user: 'User8' },
    { id: 9, product: 'Product9', user: 'User9' },
    { id: 10, product: 'Product10', user: 'User10' },
    { id: 11, product: 'Product11', user: 'User11' },
    { id: 12, product: 'Product12', user: 'User12' },
    { id: 13, product: 'Product13', user: 'User13' },
    { id: 14, product: 'Product14', user: 'User14' },
    { id: 15, product: 'Product15', user: 'User15' },
    { id: 16, product: 'Product16', user: 'User16' },
    { id: 17, product: 'Product17', user: 'User17' },
    { id: 18, product: 'Product18', user: 'User18' },
    { id: 19, product: 'Product19', user: 'User19' },
    { id: 20, product: 'Product20', user: 'User20' },
    { id: 21, product: 'Product21', user: 'User21' },
    { id: 22, product: 'Product22', user: 'User22' },
    { id: 23, product: 'Product23', user: 'User23' },
    { id: 24, product: 'Product24', user: 'User24' },
    { id: 25, product: 'Product25', user: 'User25' },
    { id: 26, product: 'Product26', user: 'User26' },
    { id: 27, product: 'Product27', user: 'User27' },
    { id: 28, product: 'Product28', user: 'User28' },
    { id: 29, product: 'Product29', user: 'User29' },
    { id: 30, product: 'Product30', user: 'User30' },
    { id: 31, product: 'Product31', user: 'User31' },
    { id: 32, product: 'Product32', user: 'User32' },
    { id: 33, product: 'Product33', user: 'User33' },
    { id: 34, product: 'Product34', user: 'User34' },
    { id: 35, product: 'Product35', user: 'User35' },
    { id: 36, product: 'Product36', user: 'User36' },
    { id: 37, product: 'Product37', user: 'User37' },
    { id: 38, product: 'Product38', user: 'User38' },
    { id: 39, product: 'Product39', user: 'User39' },
    { id: 40, product: 'Product40', user: 'User40' },
    { id: 41, product: 'Product41', user: 'User41' },
    { id: 42, product: 'Product42', user: 'User42' },
    { id: 43, product: 'Product43', user: 'User43' },
    { id: 44, product: 'Product44', user: 'User44' },
    { id: 45, product: 'Product45', user: 'User45' },
    { id: 46, product: 'Product46', user: 'User46' },
    { id: 47, product: 'Product47', user: 'User47' },
    { id: 48, product: 'Product48', user: 'User48' },
    { id: 49, product: 'Product49', user: 'User49' },
    { id: 50, product: 'Product50', user: 'User50' },
    { id: 51, product: 'Product51', user: 'User51' },
    { id: 52, product: 'Product52', user: 'User52' },
    { id: 53, product: 'Product53', user: 'User53' },
    { id: 54, product: 'Product54', user: 'User54' },
    { id: 55, product: 'Product55', user: 'User55' },
    { id: 56, product: 'Product56', user: 'User56' },
    { id: 57, product: 'Product57', user: 'User57' },
    { id: 58, product: 'Product58', user: 'User58' },
    { id: 59, product: 'Product59', user: 'User59' },
    { id: 60, product: 'Product60', user: 'User60' },
    { id: 61, product: 'Product61', user: 'User61' },
    { id: 62, product: 'Product62', user: 'User62' },
    { id: 63, product: 'Product63', user: 'User63' },
    { id: 64, product: 'Product64', user: 'User64' },
    { id: 65, product: 'Product65', user: 'User65' },
    { id: 66, product: 'Product66', user: 'User66' },
    { id: 67, product: 'Product67', user: 'User67' },
    { id: 68, product: 'Product68', user: 'User68' },
    { id: 69, product: 'Product69', user: 'User69' },
    { id: 70, product: 'Product70', user: 'User70' },
    { id: 71, product: 'Product71', user: 'User71' },
    { id: 72, product: 'Product72', user: 'User72' },
    { id: 73, product: 'Product73', user: 'User73' },
    { id: 74, product: 'Product74', user: 'User74' },
    { id: 75, product: 'Product75', user: 'User75' },
    { id: 76, product: 'Product76', user: 'User76' },
    { id: 77, product: 'Product77', user: 'User77' },
    { id: 78, product: 'Product78', user: 'User78' },
    { id: 79, product: 'Product79', user: 'User79' },
    { id: 80, product: 'Product80', user: 'User80' },
    { id: 81, product: 'Product81', user: 'User81' },
    { id: 82, product: 'Product82', user: 'User82' },
    { id: 83, product: 'Product83', user: 'User83' },
    { id: 84, product: 'Product84', user: 'User84' },
    { id: 85, product: 'Product85', user: 'User85' },
    { id: 86, product: 'Product86', user: 'User86' },
    { id: 87, product: 'Product87', user: 'User87' },
    { id: 88, product: 'Product88', user: 'User88' },
    { id: 89, product: 'Product89', user: 'User89' },
    { id: 90, product: 'Product90', user: 'User90' },
    { id: 91, product: 'Product91', user: 'User91' },
    { id: 92, product: 'Product92', user: 'User92' },
    { id: 93, product: 'Product93', user: 'User93' },
    { id: 94, product: 'Product94', user: 'User94' },
    { id: 95, product: 'Product95', user: 'User95' },
    { id: 96, product: 'Product96', user: 'User96' },
    { id: 97, product: 'Product97', user: 'User97' },
    { id: 98, product: 'Product98', user: 'User98' },
    { id: 99, product: 'Product99', user: 'User99' },
    { id: 100, product: 'Product100', user: 'User100' }
  ];
  
  filteredItems = this.items;
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  // filterItems(item: any) {
  //   const filteresValues = this.items.filter((res) => res.id === item || res.product === item || res.user === item);

  //   console.log('filteresValues', filteresValues);

  //   return filteresValues;
  // }


  filterItems(searchTerm: string) {
    const lowercasedTerm = searchTerm.toLowerCase();
  
    const filtered = this.items.filter(item =>
      item.product.toLowerCase().includes(lowercasedTerm) ||
      item.user.toLowerCase().includes(lowercasedTerm) ||
      item.id.toString().includes(lowercasedTerm)
    );
  
    this.currentPage = 1; // Reset to the first page
    this.filteredItems = filtered.slice(0, this.itemsPerPage); // Initial slice for the first page

    console.log('this.filteredItems', this.filteredItems);
    
  }
  
  ngOnInit() {
    this.updateFilteredItems();
  }

  updateFilteredItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;

    console.log('startIndex',startIndex);
    
    const endIndex = startIndex + this.itemsPerPage;
    
    console.log('endIndex',endIndex);
    this.filteredItems = this.items.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateFilteredItems();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateFilteredItems();
    }
  }

  get totalPages() {


    
    return Math.ceil(this.items.length / this.itemsPerPage);
  }
}
