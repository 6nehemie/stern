import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-[52px] w-full rounded-sm border-2 border-gray-2 bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm font-exo placeholder:font-sans file:font-bold font-medium placeholder:text-black placeholder:text-sm placeholder:font-light focus:border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 max-sm:text-base',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
