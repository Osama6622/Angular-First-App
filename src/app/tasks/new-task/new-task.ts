import { Component, Output, Input, EventEmitter, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.modal';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  private tasksService = inject(TaskService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.userId, {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDate(),
    })
    this.close.emit();
  }
}
