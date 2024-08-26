import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent {
constructor(public dialogRef:MatDialogRef<MyDialogComponent>){}


close(data:any):void{
  this.dialogRef.close(data);

  console.log('data',data);
  
}
}
