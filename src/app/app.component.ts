import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'practice-app';

  employees: Employee[] = [];

  increaseButtons: any[] = [];

  buttonColor: string = 'orange';
  randomNumber: number = 0;
  constructor(private employeeservice: EmployeeService) {}
  toggledButton: boolean = false;
    count:number = 0;

  ngOnInit() {
    // this.employees = this.employeeservice.getEmployees();
  }

  // deleteEmployee(id: number) {
  //   this.employeeservice.deleteEmployee(id);
  //   this.employees = this.employeeservice.getEmployees();
  // }

  createButtonsOnUserClick(button: any) {
    this.increaseButtons.push(button.length);
  }

  changeBackgroundColorOnUserClick() {
    this.buttonColor = this.buttonColor === 'orange' ? 'green' : 'orange';
  }

  getRandomNumber(): number {
    const min = 1;
    const max = 298219892912128;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onButtonClick() {
    this.randomNumber = this.getRandomNumber();
  }


  buttonToggleOnUserClick(){
    this.toggledButton = !this.toggledButton;
  }

  increaseCountOnUserClicks(){
    this.count++;
  }

  

  createButtonOnClick(button:any){
    this.increaseButtons.push(button.length);
  }
}
