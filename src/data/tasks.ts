import { Task } from '../types/Task';
import { taskData } from './taskData';

export const tasks: Task[] = taskData.split('\n')
  .filter(line => line.trim() !== '')
  .map((title, index) => ({
    id: `task-${index + 1}`,
    title: title.trim(),
    completed: false,
    order: index + 1,
  }));