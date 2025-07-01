import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'red-pulse';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  size = 'md',
  variant = 'primary'
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700 
      hover:from-blue-700 hover:to-blue-800
    `,
    'red-pulse': `
      bg-gradient-to-r from-red-600 to-red-700 
      hover:from-red-700 hover:to-red-800
      animate-pulse shadow-lg shadow-red-500/50
      hover:shadow-xl hover:shadow-red-500/60
    `
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        text-white font-bold rounded-lg shadow-lg transform transition-all 
        duration-200 hover:scale-105 hover:shadow-xl active:scale-95
        ${sizeClasses[size]} ${variantClasses[variant]} ${className}
        group
      `}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Neon sliding effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Pulse effect - enhanced for red variant */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-200 rounded-lg ${
        variant === 'red-pulse' ? 'bg-red-400' : 'bg-blue-400'
      }`}></div>
    </button>
  );
};

export default AnimatedButton;