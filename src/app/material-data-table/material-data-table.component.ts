import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-material-data-table',
  templateUrl: './material-data-table.component.html',
  styleUrls: ['./material-data-table.component.scss'],
})
export class MaterialDataTableComponent {
  displayedColumns: string[] = ['id', 'name','address'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDate().subscribe((data) => {
      this.dataSource.data = data;

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort =  this.sort;
    });
  }
}
