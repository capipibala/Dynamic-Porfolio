import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Container } from './Container';

type SectionProps = HTMLAttributes<HTMLElement> & {
    title?: string;
    eyebrow?: string;
    description?: string;
    children: ReactNode;
    contentClassName?: string;
};

export function Section({
    title,
    eyebrow,
    description,
    children,
    className,
    contentClassName,
    ...props
}: SectionProps) {
    return (
        <section className={cn('py-16 sm:py-20', className)} {...props}>
            <Container>
                {(eyebrow || title || description) && (
                    <div className="mb-10 max-w-2xl">
                        {eyebrow ? (
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">{eyebrow}</p>
                        ) : null}
                        {title ? <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2> : null}
                        {description ? <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p> : null}
                    </div>
                )}
                <div className={contentClassName}>{children}</div>
            </Container>
        </section>
    );
}
