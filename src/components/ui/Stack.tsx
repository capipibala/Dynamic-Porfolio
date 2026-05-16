import type { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type StackProps = HTMLAttributes<HTMLDivElement> & {
    gap?: 'sm' | 'md' | 'lg';
};

const gapClassMap = {
    sm: 'space-y-3',
    md: 'space-y-5',
    lg: 'space-y-7',
} as const;

export function Stack({ className, gap = 'md', ...props }: StackProps) {
    return <div className={cn(gapClassMap[gap], className)} {...props} />;
}
