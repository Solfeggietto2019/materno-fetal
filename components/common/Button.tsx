'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      onClick,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      href,
      target,
      rel,
      type = 'button',
      disabled = false,
    },
    ref
  ) => {
    const baseStyles =
      'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2';

    const variants = {
      primary: 'bg-primary text-white hover:opacity-90 disabled:opacity-50',
      secondary: 'bg-secondary text-white hover:opacity-90 disabled:opacity-50',
      outline:
        'border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={classes}
          ref={ref as any}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        type={type}
        onClick={onClick}
        className={classes}
        disabled={disabled}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
