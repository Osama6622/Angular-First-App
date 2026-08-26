import { Component, input, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { NewTaskData } from './task/task.modal';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;
  isAddingTask = false;


  constructor(private tasksService: TaskService) {}

  get SelectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
