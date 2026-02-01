import { Component } from '@angular/core';
import { SubjectsService } from '../../core/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent {
  title = '';
  teacher = '';
  subjects$ = this.subjectsService.subjects$;

  constructor(private subjectsService: SubjectsService) {}

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
