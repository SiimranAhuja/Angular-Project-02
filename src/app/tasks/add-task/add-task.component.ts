import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TaskService);

  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  onCancelClicked() {
    this.close.emit();
  }
  onSubmit(){
   this.taskService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate
   }, this.userId);
   this.close.emit();
  }
}
