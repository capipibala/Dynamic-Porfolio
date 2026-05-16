import type { InputHTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

type TextBoxProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    hint?: string;
    error?: string;
    fullWidth?: boolean;
    inputClassName?: string;
};

export function TextBox({
    label,
    hint,
    error,
    fullWidth = true,
    className,
    inputClassName,
    id,
    type = 'text',
    ...props
}: TextBoxProps) {
    const generatedId = id ?? 'textbox';
    const describedBy = error ? `${generatedId}-error` : hint ? `${generatedId}-hint` : undefined;

    return (
        <div className={cn('space-y-2', fullWidth && 'w-full', className)}>
            {label ? (
                <label htmlFor={generatedId} className="block text-sm font-medium text-slate-800 dark:text-slate-100">
                    {label}
                </label>
            ) : null}
            <input
                id={generatedId}
                type={type}
                aria-label={props['aria-label'] ?? (!label ? 'textbox' : undefined)}
                aria-invalid={Boolean(error)}
                aria-describedby={describedBy}
                className={cn(
                    'block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500',
                    error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
                    inputClassName,
                )}
                {...props}
            />
            {hint && !error ? (
                <p id={`${generatedId}-hint`} className="text-sm text-slate-500 dark:text-slate-400">
                    {hint}
                </p>
            ) : null}
            {error ? (
                <p id={`${generatedId}-error`} className="text-sm text-red-600 dark:text-red-400">
                    {error}
                </p>
            ) : null}
        </div>
    );
}
