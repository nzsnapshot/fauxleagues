import { useState, useEffect } from 'react';
import { Task } from '../types/Task';
import { tasks as initialTasks } from '../data/tasks';

export function useTaskList() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return initialTasks;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (taskId: string) => {
    setTasks(currentTasks => 
      currentTasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const resetProgress = () => {
    setTasks(initialTasks);
  };

  return {
    tasks,
    toggleTask,
    resetProgress,
  };
}