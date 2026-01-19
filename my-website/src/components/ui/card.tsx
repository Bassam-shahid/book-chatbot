import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-lg border bg-card text-card-foreground shadow-sm',
          'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800',
          className
        )}
        {...props}
      >
        {(title || description) && (
          <div className="p-6 pb-4">
            {title && (
              <h3 className="text-xl font-semibold leading-none tracking-tight mb-2">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-muted-foreground text-gray-600 dark:text-gray-400">
                {description}
              </p>
            )}
          </div>
        )}
        {children && (
          <div className="p-6 pt-0">
            {children}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };