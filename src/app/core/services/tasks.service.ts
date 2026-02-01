import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskStatus } from '../models/task.model';

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

@Injectable({ providedIn: 'root' })
export class TasksService {
  private readonly _tasks$ = new BehaviorSubject<Task[]>([
    { id: 't-1', subjectId: 'sub-1', title: 'Read Angular basics', status: 'todo', deadline: '2026-02-10' },
    { id: 't-2', subjectId: 'sub-2', title: 'Solve problems', status: 'in_progress', deadline: '2026-02-12' },
  ]);

  tasks$ = this._tasks$.asObservable();

  setStatus(taskId: string, status: TaskStatus) {
    this._tasks$.next(
      this._tasks$.value.map(t => (t.id === taskId ? { ...t, status } : t))
    );
  }

  getBySubject(subjectId: string): Task[] {
    return this._tasks$.value.filter(t => t.subjectId === subjectId);
  }
}
