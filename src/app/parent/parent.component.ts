import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  messageFromChild: string = '';


  parentMessage: string = "Hello from Parent Component";

  receiveMessage(event: any) {
    this.messageFromChild = event;
  }
}
