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
          <div className="flex items-start justify-between mb-6">
            <div className="flex flex-col">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="Raging Echoes Logo" 
                  className="w-12 h-12 object-contain"
                />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  RuneScape Leagues Tasks
                </h1>
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Credit to </span>
                <a 
                  href="https://www.twitch.tv/faux" 
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Faux
                </a>
                <span> for the original Pastebin guide</span>
              </div>
              <div className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                RuneScape Leagues 5 - Raging Echoes
              </div>
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