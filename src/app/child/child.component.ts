import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() messageFromParent:string = '';

@Output() messageToParent =  new EventEmitter<String>();


sendMessageToParent() {
  this.messageToParent.emit('Hello from Child!');
}
}
