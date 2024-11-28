import React from 'react';
import { TaskCategory } from '../types/Task';
import TaskList from './TaskList';

interface CategorySectionProps {
  category: TaskCategory;
  onToggleTask: (taskId: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, onToggleTask }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{category.name}</h2>
      <TaskList tasks={category.tasks} onToggleTask={onToggleTask} />
    </div>
  );
}

export default CategorySection;