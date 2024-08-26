import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'shilpa', position: 'Developer', department: 'IT' },
    { id: 2, name: 'pushpa', position: 'accountant', department: 'bcom' },
  ];

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee) {
    const index = this.employees.findIndex((e) => e.id === employee.id);

    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  deleteEmployee(id:Number){
this.employees = this.employees.filter(e => e.id != id);
  }
  constructor() {}
}
