import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from '../models/subject.model';

function uid() {
  return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

@Injectable({ providedIn: 'root' })
export class SubjectsService {
  private readonly _subjects$ = new BehaviorSubject<Subject[]>([
    { id: 'sub-1', title: 'Web Development', teacher: 'TBA' },
    { id: 'sub-2', title: 'Algorithms', teacher: 'TBA' },
  ]);

  subjects$ = this._subjects$.asObservable();

  addSubject(data: Omit<Subject, 'id'>) {
    const next: Subject = { id: uid(), ...data };
    this._subjects$.next([next, ...this._subjects$.value]);
  }

  getById(id: string): Subject | undefined {
    return this._subjects$.value.find(s => s.id === id);
  }
}
