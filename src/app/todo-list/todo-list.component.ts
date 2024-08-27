import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTask: string = '';
  tasks: { title: string, completed: boolean, editing: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask, completed: false, editing: false });
      this.newTask = '';
    }
  }

  toggleTaskStatus(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  editTask(index: number) {
    this.tasks[index].editing = true;
  }

  updateTask(index: number) {
    if (this.tasks[index].title.trim()) {
      this.tasks[index].editing = false;
    } else {
      this.deleteTask(index);
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
