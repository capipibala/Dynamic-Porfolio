import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type TagProps = HTMLAttributes<HTMLSpanElement>;

export function Tag({ className, ...props }: TagProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200',
                className,
            )}
            {...props}
        />
    );
}
