import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  sampleData = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'Developer',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'Designer',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: 'Manager',
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      role: 'Analyst',
    },
    {
      id: 5,
      name: 'Eve Davis',
      email: 'eve.davis@example.com',
      role: 'Developer',
    },
    {
      id: 6,
      name: 'Frank Miller',
      email: 'frank.miller@example.com',
      role: 'Developer',
    },
    {
      id: 7,
      name: 'Grace Lee',
      email: 'grace.lee@example.com',
      role: 'Manager',
    },
    {
      id: 8,
      name: 'Hank Green',
      email: 'hank.green@example.com',
      role: 'Designer',
    },
    {
      id: 9,
      name: 'Ivy Adams',
      email: 'ivy.adams@example.com',
      role: 'Analyst',
    },
    {
      id: 10,
      name: 'Jack White',
      email: 'jack.white@example.com',
      role: 'Developer',
    },
  ];

  filteredData = this.sampleData;
  filter: any;
  pageSize=5;
  currecntPage=0;

  filterData(data: any) {
    const convertedLowerCase = data.toLowerCase();

    this.filteredData = this.sampleData.filter(
      (res) =>
        res.id.toString().includes(convertedLowerCase)||
        res.name.toLowerCase().includes(convertedLowerCase) ||
        res.email.toLowerCase().includes(convertedLowerCase) ||
        res.role.toLowerCase().includes(convertedLowerCase)
    );
  }
  
}
