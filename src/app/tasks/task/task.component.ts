import { Component, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) task!: Task;
  private taskService = inject(TaskService);

  onComplete() {
    this.taskService.removeTask(this.task.id);
  }
}
