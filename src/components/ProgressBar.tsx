import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div 
        className="bg-blue-500 rounded-full h-2 transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;