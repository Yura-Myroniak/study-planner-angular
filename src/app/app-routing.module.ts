import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { SubjectDetailsComponent } from './pages/subject-details/subject-details.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjects/:id', component: SubjectDetailsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
