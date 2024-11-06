import { Component, Input } from '@angular/core';
import { TaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input() name: string | undefined;
  isAddingTask = false;

  constructor(private _taskService: TaskService) {
  }

  get selectedUserTask() {
    return this._taskService.getUserTask(this.userId);
  }

  onCompleteTask(id: string) {
    this._taskService.removeTask(id);
  }

  onAddClick() {
    this.isAddingTask = true;
  }
  onCancelClick() {
    this.isAddingTask = false;
  }
}
