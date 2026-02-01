import { Pipe, PipeTransform } from '@angular/core';
import { Task, TaskStatus } from '../../core/models/task.model';

@Pipe({ name: 'taskStatus' })
export class TaskStatusPipe implements PipeTransform {
  transform(tasks: Task[], status: TaskStatus | 'all'): Task[] {
    if (!tasks) return [];
    if (status === 'all') return tasks;
    return tasks.filter(t => t.status === status);
  }
}
