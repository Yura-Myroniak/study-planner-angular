import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../core/services/subjects.service';
import { TasksService } from '../../core/services/tasks.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
})
export class SubjectDetailsComponent {
  subjectId = this.route.snapshot.paramMap.get('id')!;
  subject = this.subjects.getById(this.subjectId);
  tasks = this.tasksService.getBySubject(this.subjectId);

  constructor(
    private route: ActivatedRoute,
    private subjects: SubjectsService,
    private tasksService: TasksService
  ) {}
}
