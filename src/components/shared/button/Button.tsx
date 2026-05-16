import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../utils/cn';

type CommonProps = {
    label?: string;
    children?: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    className?: string;
};

type NativeButtonProps = CommonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
    };

type LinkButtonProps = CommonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

export type ButtonProps = NativeButtonProps | LinkButtonProps;

const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-slate-950';

const variantClassMap = {
    primary: 'bg-sky-500 text-white hover:bg-sky-600',
    secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800',
    ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
} as const;

const sizeClassMap = {
    sm: 'min-h-10 px-4 text-sm',
    md: 'min-h-11 px-5 text-sm',
    lg: 'min-h-12 px-6 text-base',
} as const;

export function Button({
    label,
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    leftIcon,
    rightIcon,
    className,
    ...props
}: ButtonProps) {
    const content = (
        <>
            {leftIcon}
            <span>{children ?? label}</span>
            {rightIcon}
        </>
    );

    const classes = cn(baseClasses, variantClassMap[variant], sizeClassMap[size], fullWidth && 'w-full', className);

    if ('href' in props && props.href) {
        const { href, target, rel, ...anchorProps } = props;
        return (
            <a className={classes} href={href} target={target} rel={rel} {...anchorProps}>
                {content}
            </a>
        );
    }

    const { type, ...buttonProps } = props as NativeButtonProps;

    return (
        <button className={classes} type={type ?? 'button'} {...buttonProps}>
            {content}
        </button>
    );
}
