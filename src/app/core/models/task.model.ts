export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface Task {
  id: string;
  subjectId: string;
  title: string;
  deadline?: string; // ISO date
  status: TaskStatus;
}
