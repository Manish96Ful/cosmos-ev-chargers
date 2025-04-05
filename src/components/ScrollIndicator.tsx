import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
      <span className="text-sm text-gray-600 dark:text-blue-200 mb-2">Scroll Down</span>
      <div className="w-6 h-10 border-2 border-green-500 dark:border-green-400 rounded-full flex justify-center p-1">
        <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full animate-bounce-slow"></div>
      </div>
    </div>
  );
};

export default ScrollIndicator; 