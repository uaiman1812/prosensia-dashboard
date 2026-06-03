'use client';

import { ButtonProps } from '@/types';

const Button = ({ variant, size, children, onClick, disabled, fullWidth }: ButtonProps) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-300',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const width = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${disabledStyles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;