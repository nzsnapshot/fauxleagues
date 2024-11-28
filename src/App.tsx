import React from 'react';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';
import { useTheme } from './hooks/useTheme';
import { useTaskList } from './hooks/useTaskList';
import { Scroll, RotateCcw } from 'lucide-react';

function App() {
  const { tasks, toggleTask, resetProgress } = useTaskList();
  const { theme, toggleTheme } = useTheme();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Scroll className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                RuneScape Leagues Tasks
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={resetProgress}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                title="Reset progress"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Progress: {completedTasks}/{totalTasks} tasks
              </div>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
          
          <ProgressBar completed={completedTasks} total={totalTasks} />

          <div className="mt-6 overflow-y-auto max-h-[calc(100vh-200px)]">
            <TaskList
              tasks={tasks}
              onToggleTask={toggleTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;