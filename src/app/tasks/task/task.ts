import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TaskObject } from './task.modal';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskObject

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.deleteTask(this.task.id)
  }
}
