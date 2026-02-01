import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { TasksService } from '../../core/services/tasks.service';
import { Task, TaskStatus } from '../../core/models/task.model';
import { TaskStatusPipe } from '../../shared/pipes/task-status.pipe';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, AsyncPipe, TaskStatusPipe],
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  filter: TaskStatus | 'all' = 'all';

  tasks$!: Observable<Task[]>;

  constructor(private tasksService: TasksService) {
    this.tasks$ = this.tasksService.tasks$;
  }

  setDone(id: string) {
    this.tasksService.setStatus(id, 'done');
  }
}
