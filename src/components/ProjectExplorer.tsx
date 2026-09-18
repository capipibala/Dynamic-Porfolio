import { useLocale } from '../i18n/locale-context';
import { useState } from 'react';
import type { ProjectItem } from '../types/portfolio';
import { Button } from './shared/button/Button';
import { TextBox } from './shared/textbox/TextBox';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';

export function ProjectExplorer({ projects }: { projects: ProjectItem[] }) {
    const { t } = useLocale();
    const [query, setQuery] = useState('');
    const [technology, setTechnology] = useState('');
    const tags = [...new Set(projects.flatMap((project) => project.tags))].sort();
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const filtered = projects.filter(
        (project) =>
            (!technology || project.tags.includes(technology)) &&
            [project.title, project.description, ...project.tags]
                .join(' ')
                .toLocaleLowerCase()
                .includes(normalizedQuery),
    );

    return (
        <>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end">
                <TextBox
                    label={t.search}
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={t.searchPlaceholder}
                />
                <div className="w-full space-y-2 sm:w-64 sm:shrink-0">
                    <label htmlFor="project-technology" className="block text-sm font-medium">
                        {t.technology}
                    </label>
                    <select
                        id="project-technology"
                        className="min-h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900"
                        value={technology}
                        onChange={(event) => setTechnology(event.target.value)}
                    >
                        <option value="">{t.allTechnologies}</option>
                        {tags.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
                {(query || technology) && (
                    <Button
                        label={t.clearFilters}
                        variant="secondary"
                        className="shrink-0"
                        onClick={() => {
                            setQuery('');
                            setTechnology('');
                        }}
                    />
                )}
            </div>
            <p role="status" className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                {t.results.replace('{count}', String(filtered.length)).replace('{total}', String(projects.length))}
            </p>
            {filtered.length === 0 && <Card>{t.noResults}</Card>}
            <div className="grid gap-6 lg:grid-cols-2">
                {filtered.map((project) => (
                    <Card key={project.title} className="flex h-full flex-col">
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            {project.featured && <Tag>{t.featured}</Tag>}
                        </div>
                        <p className="mt-4 flex-1 leading-8 text-slate-600 dark:text-slate-300">
                            {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>
                        {(project.href || project.repositoryHref) && (
                            <div className="mt-6 flex flex-wrap gap-3">
                                {project.href && <Button label={t.livePreview} href={project.href} size="sm" />}
                                {project.repositoryHref && (
                                    <Button
                                        label={t.repository}
                                        href={project.repositoryHref}
                                        variant="secondary"
                                        size="sm"
                                    />
                                )}
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </>
    );
}
