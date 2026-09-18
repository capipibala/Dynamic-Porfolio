import { useLocale } from '../i18n/locale-context';
import { portfolioVi } from '../data/portfolio.vi';
import { ProjectExplorer } from '../components/ProjectExplorer';
import { portfolioData } from '../data/portfolio';
import { AppShell } from '../layouts/AppShell';
import { Button } from '../components/shared/button/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Stack } from '../components/ui/Stack';
import { Tag } from '../components/ui/Tag';

export function PortfolioPage() {
    const { locale, t } = useLocale();
    const { person, navigation, socialLinks, stats, about, skillGroups, experiences, projects, contact, siteName } =
        locale === 'vi' ? portfolioVi : portfolioData;

    return (
        <AppShell siteName={siteName} navigation={navigation} socialLinks={socialLinks}>
            <section className="border-b border-slate-200 dark:border-slate-800">
                <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <Stack gap="lg">
                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
                                {t.hero}
                            </p>
                            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                                {person.name}
                            </h1>
                            <p className="mt-4 text-xl text-slate-700 dark:text-slate-200">{person.role}</p>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                                {person.summary}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button label={t.viewProjects} href="#projects" />
                            <Button label={t.contactMe} href="#contact" variant="secondary" />
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
                            <span>{person.location}</span>
                            <span>{person.availability}</span>
                        </div>
                    </Stack>

                    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        {stats.map((item) => (
                            <Card key={item.label}>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white">{item.value}</p>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <Section id="about" eyebrow={t.about} title={t.aboutTitle}>
                <div className="grid gap-6 lg:grid-cols-2">
                    {about.map((paragraph) => (
                        <Card key={paragraph}>
                            <p className="leading-8 text-slate-600 dark:text-slate-300">{paragraph}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="skills" eyebrow={t.skills} title={t.skillsTitle} description={t.skillsDescription}>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {skillGroups.map((group) => (
                        <Card key={group.title} className="h-full">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <Tag key={item}>{item}</Tag>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section
                id="experience"
                eyebrow={t.experience}
                title={t.experienceTitle}
                description={t.experienceDescription}
            >
                <div className="grid gap-6">
                    {experiences.map((experience) => (
                        <Card key={`${experience.company}-${experience.role}`}>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                        {experience.role}
                                    </h3>
                                    <p className="mt-1 text-sm font-medium text-sky-500">{experience.company}</p>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{experience.period}</p>
                            </div>
                            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                                {experience.description}
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                {experience.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="projects" eyebrow={t.projects} title={t.projectsTitle} description={t.projectsDescription}>
                <ProjectExplorer projects={projects} />
            </Section>

            <Section id="contact" eyebrow={t.contact} title={t.contactTitle} description={contact.intro}>
                <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                    <Card>
                        <Stack>
                            <p className="leading-8 text-slate-600 dark:text-slate-300">{t.contactBody}</p>
                            <div className="flex flex-wrap gap-4">
                                {contact.items.map((item) => (
                                    <Button key={item.label} label={item.label} href={item.href} variant="secondary" />
                                ))}
                            </div>
                        </Stack>
                    </Card>

                    <Card>
                        <ul className="space-y-4">
                            {contact.items.map((item) => (
                                <li key={item.label}>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                        {item.label}
                                    </p>
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                                        className="mt-1 inline-block text-base text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:text-sky-500 dark:text-white dark:decoration-slate-700"
                                    >
                                        {item.value}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </Section>
        </AppShell>
    );
}
