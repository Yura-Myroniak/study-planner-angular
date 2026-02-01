import { Component } from '@angular/core';
import { TasksService } from '../../core/services/tasks.service';
import { TaskStatus } from '../../core/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  filter: TaskStatus | 'all' = 'all';
  tasks$ = this.tasksService.tasks$;

  constructor(private tasksService: TasksService) {}

  setDone(id: string) {
    this.tasksService.setStatus(id, 'done');
  }
}
