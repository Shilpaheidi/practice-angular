import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-table-pagination',
  templateUrl: './data-table-pagination.component.html',
  styleUrls: ['./data-table-pagination.component.scss']
})
export class DataTablePaginationComponent {
  sampleData = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Developer' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Designer' },
    { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'Manager' },
    { id: 4, name: 'David Wilson', email: 'david.wilson@example.com', role: 'Analyst' },
    { id: 5, name: 'Eve Davis', email: 'eve.davis@example.com', role: 'Developer' },
    { id: 6, name: 'Frank Miller', email: 'frank.miller@example.com', role: 'Developer' },
    { id: 7, name: 'Grace Lee', email: 'grace.lee@example.com', role: 'Manager' },
    { id: 8, name: 'Hank Green', email: 'hank.green@example.com', role: 'Designer' },
    { id: 9, name: 'Ivy Adams', email: 'ivy.adams@example.com', role: 'Analyst' },
    { id: 10, name: 'Jack White', email: 'jack.white@example.com', role: 'Developer' },
    { id: 11, name: 'Karen Martin', email: 'karen.martin@example.com', role: 'Designer' },
    { id: 12, name: 'Leo Anderson', email: 'leo.anderson@example.com', role: 'Manager' },
    { id: 13, name: 'Mona Rogers', email: 'mona.rogers@example.com', role: 'Analyst' },
    { id: 14, name: 'Nina Thomas', email: 'nina.thomas@example.com', role: 'Developer' },
    { id: 15, name: 'Oscar Hernandez', email: 'oscar.hernandez@example.com', role: 'Developer' },
    { id: 16, name: 'Paul King', email: 'paul.king@example.com', role: 'Manager' },
    { id: 17, name: 'Quinn Clark', email: 'quinn.clark@example.com', role: 'Designer' },
    { id: 18, name: 'Rachel Lewis', email: 'rachel.lewis@example.com', role: 'Analyst' },
    { id: 19, name: 'Steve Walker', email: 'steve.walker@example.com', role: 'Developer' },
    { id: 20, name: 'Tina Hall', email: 'tina.hall@example.com', role: 'Designer' },
    { id: 21, name: 'Uma White', email: 'uma.white@example.com', role: 'Manager' },
    { id: 22, name: 'Victor Young', email: 'victor.young@example.com', role: 'Analyst' },
    { id: 23, name: 'Wendy Scott', email: 'wendy.scott@example.com', role: 'Developer' },
    { id: 24, name: 'Xander Green', email: 'xander.green@example.com', role: 'Developer' },
    { id: 25, name: 'Yara Adams', email: 'yara.adams@example.com', role: 'Manager' },
    { id: 26, name: 'Zachary King', email: 'zachary.king@example.com', role: 'Designer' },
    { id: 27, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Developer' },
    { id: 28, name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Designer' },
    { id: 29, name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'Manager' },
    { id: 30, name: 'David Wilson', email: 'david.wilson@example.com', role: 'Analyst' },
    { id: 31, name: 'Eve Davis', email: 'eve.davis@example.com', role: 'Developer' },
    { id: 32, name: 'Frank Miller', email: 'frank.miller@example.com', role: 'Developer' },
    { id: 33, name: 'Grace Lee', email: 'grace.lee@example.com', role: 'Manager' },
    { id: 34, name: 'Hank Green', email: 'hank.green@example.com', role: 'Designer' },
    { id: 35, name: 'Ivy Adams', email: 'ivy.adams@example.com', role: 'Analyst' },
    { id: 36, name: 'Jack White', email: 'jack.white@example.com', role: 'Developer' },
    { id: 37, name: 'Karen Martin', email: 'karen.martin@example.com', role: 'Designer' },
    { id: 38, name: 'Leo Anderson', email: 'leo.anderson@example.com', role: 'Manager' },
    { id: 39, name: 'Mona Rogers', email: 'mona.rogers@example.com', role: 'Analyst' },
    { id: 40, name: 'Nina Thomas', email: 'nina.thomas@example.com', role: 'Developer' },
    { id: 41, name: 'Oscar Hernandez', email: 'oscar.hernandez@example.com', role: 'Developer' },
    { id: 42, name: 'Paul King', email: 'paul.king@example.com', role: 'Manager' },
    { id: 43, name: 'Quinn Clark', email: 'quinn.clark@example.com', role: 'Designer' },
    { id: 44, name: 'Rachel Lewis', email: 'rachel.lewis@example.com', role: 'Analyst' },
    { id: 45, name: 'Steve Walker', email: 'steve.walker@example.com', role: 'Developer' },
    { id: 46, name: 'Tina Hall', email: 'tina.hall@example.com', role: 'Designer' },
    { id: 47, name: 'Uma White', email: 'uma.white@example.com', role: 'Manager' },
    { id: 48, name: 'Victor Young', email: 'victor.young@example.com', role: 'Analyst' },
    { id: 49, name: 'Wendy Scott', email: 'wendy.scott@example.com', role: 'Developer' },
    { id: 50, name: 'Xander Green', email: 'xander.green@example.com', role: 'Developer' },
    { id: 51, name: 'Yara Adams', email: 'yara.adams@example.com', role: 'Manager' },
    { id: 52, name: 'Zachary King', email: 'zachary.king@example.com', role: 'Designer' },
    { id: 53, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Developer' },
    { id: 54, name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Designer' },
    { id: 55, name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'Manager' },
    { id: 56, name: 'David Wilson', email: 'david.wilson@example.com', role: 'Analyst' },
    { id: 57, name: 'Eve Davis', email: 'eve.davis@example.com', role: 'Developer' },
    { id: 58, name: 'Frank Miller', email: 'frank.miller@example.com', role: 'Developer' },
    { id: 59, name: 'Grace Lee', email: 'grace.lee@example.com', role: 'Manager' },
    { id: 60, name: 'Hank Green', email: 'hank.green@example.com', role: 'Designer' },
    { id: 61, name: 'Ivy Adams', email: 'ivy.adams@example.com', role: 'Analyst' },
    { id: 62, name: 'Jack White', email: 'jack.white@example.com', role: 'Developer' },
    { id: 63, name: 'Karen Martin', email: 'karen.martin@example.com', role: 'Designer' },
    { id: 64, name: 'Leo Anderson', email: 'leo.anderson@example.com', role: 'Manager' },
    { id: 65, name: 'Mona Rogers', email: 'mona.rogers@example.com', role: 'Analyst' },
    { id: 66, name: 'Nina Thomas', email: 'nina.thomas@example.com', role: 'Developer' },
    { id: 67, name: 'Oscar Hernandez', email: 'oscar.hernandez@example.com', role: 'Developer' },
    { id: 68, name: 'Paul King', email: 'paul.king@example.com', role: 'Manager' },
    { id: 69, name: 'Quinn Clark', email: 'quinn.clark@example.com', role: 'Designer' },
    { id: 70, name: 'Rachel Lewis', email: 'rachel.lewis@example.com', role: 'Analyst' },
    { id: 71, name: 'Steve Walker', email: 'steve.walker@example.com', role: 'Developer' },
    { id: 72, name: 'Tina Hall', email: 'tina.hall@example.com', role: 'Designer' },
    { id: 73, name: 'Uma White', email: 'uma.white@example.com', role: 'Manager' },
    { id: 74, name: 'Victor Young', email: 'victor.young@example.com', role: 'Analyst' },
    { id: 75, name: 'Wendy Scott', email: 'wendy.scott@example.com', role: 'Developer' },
    { id: 76, name: 'Xander Green', email: 'xander.green@example.com', role: 'Developer' },
    { id: 77, name: 'Yara Adams', email: 'yara.adams@example.com', role: 'Manager' },
    { id: 78, name: 'Zachary King', email: 'zachary.king@example.com', role: 'Designer' },
    { id: 79, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Developer' },
    { id: 80, name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Designer' },
    { id: 81, name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'Manager' },
    { id: 82, name: 'David Wilson', email: 'david.wilson@example.com', role: 'Analyst' },
    { id: 83, name: 'Eve Davis', email: 'eve.davis@example.com', role: 'Developer' },
    { id: 84, name: 'Frank Miller', email: 'frank.miller@example.com', role: 'Developer' },
    { id: 85, name: 'Grace Lee', email: 'grace.lee@example.com', role: 'Manager' },
    { id: 86, name: 'Hank Green', email: 'hank.green@example.com', role: 'Designer' },
    { id: 87, name: 'Ivy Adams', email: 'ivy.adams@example.com', role: 'Analyst' },
    { id: 88, name: 'Jack White', email: 'jack.white@example.com', role: 'Developer' },
    { id: 89, name: 'Karen Martin', email: 'karen.martin@example.com', role: 'Designer' },
    { id: 90, name: 'Leo Anderson', email: 'leo.anderson@example.com', role: 'Manager' },
    { id: 91, name: 'Mona Rogers', email: 'mona.rogers@example.com', role: 'Analyst' },
    { id: 92, name: 'Nina Thomas', email: 'nina.thomas@example.com', role: 'Developer' },
    { id: 93, name: 'Oscar Hernandez', email: 'oscar.hernandez@example.com', role: 'Developer' },
    { id: 94, name: 'Paul King', email: 'paul.king@example.com', role: 'Manager' },
    { id: 95, name: 'Quinn Clark', email: 'quinn.clark@example.com', role: 'Designer' },
    { id: 96, name: 'Rachel Lewis', email: 'rachel.lewis@example.com', role: 'Analyst' },
    { id: 97, name: 'Steve Walker', email: 'steve.walker@example.com', role: 'Developer' },
    { id: 98, name: 'Tina Hall', email: 'tina.hall@example.com', role: 'Designer' },
    { id: 99, name: 'Uma White', email: 'uma.white@example.com', role: 'Manager' },
    { id: 100, name: 'Victor Young', email: 'victor.young@example.com', role: 'Analyst' }
  ];
  
  filteredData: any[] = [];
  paginatedData: any[] = [];
  pageSize = 5;
  currentPage = 0;
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      name: [''],
      email: [''],
      role: ['']
    });
  }

  ngOnInit() {
    this.sampleData = [...this.sampleData]; // Initialize with your data
    this.filteredData = this.sampleData;
    this.updatePagination();
  }

  applyFilter() {
    const formValues = this.filterForm.value;
    this.filteredData = this.sampleData.filter(item =>
      (!formValues.name || item.name.toLowerCase().includes(formValues.name.toLowerCase())) &&
      (!formValues.email || item.email.toLowerCase().includes(formValues.email.toLowerCase())) &&
      (!formValues.role || item.role.toLowerCase().includes(formValues.role.toLowerCase()))
    );
    this.currentPage = 0; // Reset to the first page on filter
    this.updatePagination();
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  updatePagination() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.filteredData.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }
}
