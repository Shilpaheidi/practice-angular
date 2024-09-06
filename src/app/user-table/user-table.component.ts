import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  sortDirection = 'asc';
  sortColumn = '';

  searchQuery = '';
  pageSize = 5;
  currentPage = 1;


  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.userDataService.getUsers().subscribe((data) => {

      console.log('data',data);
      
      this.users = data;
      this.filteredUsers = data;
    });
  }

  sort(column: string) {
    this.sortColumn = column;
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';

    this.filteredUsers.sort((a, b) => {
      if (a[column] < b[column]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (a[column] > b[column]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  filter() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 1; // Reset to the first page after filtering
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(startIndex, startIndex + this.pageSize);
  }

  changePageSize(event: any) {
    this.pageSize = event.target.value;
    this.currentPage = 1; // Reset to the first page when page size changes
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  exportToCSV() {
    const csvData = this.filteredUsers.map(user => `${user.name},${user.email},${user.role},${user.status}`).join('\n');
    console.log('csvData',csvData);
    
    const blob = new Blob([csvData], { type: 'text/csv' });
    console.log('blob',blob);
    const url = window.URL.createObjectURL(blob);
    console.log('url',url);
    const a = document.createElement('a');
    console.log('a',a);
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'users.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
}
