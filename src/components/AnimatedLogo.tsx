import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const AnimatedLogo: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="relative w-10 h-10 animate-float">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 dark:bg-green-500 opacity-25 blur-md"></div>
      
      {/* Main logo circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-green-500 dark:from-blue-600 dark:to-green-400">
        {/* Lightning bolt */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
        </div>
        
        {/* Orbiting circle */}
        <div 
          className="absolute w-2 h-2 rounded-full bg-white"
          style={{
            top: '10%',
            left: '10%',
            animation: 'orbit 3s linear infinite',
            transformOrigin: '200% 200%',
          }}
        ></div>
      </div>
      
      <style>
        {`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(15px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(15px) rotate(-360deg);
          }
        }
        `}
      </style>
    </div>
  );
};

export default AnimatedLogo; 