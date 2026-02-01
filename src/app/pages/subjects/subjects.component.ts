import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { SubjectsService } from '../../core/services/subjects.service';
import { Subject } from '../../core/models/subject.model';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AsyncPipe],
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent {
  title = '';
  teacher = '';

  subjects$!: Observable<Subject[]>;

  constructor(private subjectsService: SubjectsService) {
    this.subjects$ = this.subjectsService.subjects$;
  }

  add() {
    if (!this.title.trim()) return;
    this.subjectsService.addSubject({
      title: this.title.trim(),
      teacher: this.teacher.trim() || undefined,
    });
    this.title = '';
    this.teacher = '';
  }
}
