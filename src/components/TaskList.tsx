import React from 'react';
import { Task } from '../types/Task';
import { CheckSquare, Square } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  const sortedTasks = [...tasks].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-2">
      {sortedTasks.map((task) => (
        <div
          key={task.id}
          className="flex items-start space-x-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
          onClick={() => onToggleTask(task.id)}
        >
          <div className="flex-shrink-0 pt-1">
            {task.completed ? (
              <CheckSquare className="w-5 h-5 text-green-500" />
            ) : (
              <Square className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            )}
          </div>
          <span className={`${
            task.completed 
              ? 'line-through text-gray-500 dark:text-gray-400' 
              : 'text-gray-800 dark:text-gray-200'
          }`}>
            {task.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;