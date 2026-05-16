import { portfolioData } from '../data/portfolio';
import { AppShell } from '../layouts/AppShell';
import { Button } from '../components/shared/button/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Stack } from '../components/ui/Stack';
import { Tag } from '../components/ui/Tag';

export function PortfolioPage() {
    const { person, navigation, socialLinks, stats, about, skillGroups, experiences, projects, contact, siteName } = portfolioData;

    return (
        <AppShell siteName={siteName} navigation={navigation} socialLinks={socialLinks}>
            <section className="border-b border-slate-200 dark:border-slate-800">
                <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <Stack gap="lg">
                        <div>
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Portfolio · Component System</p>
                            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                                {person.name}
                            </h1>
                            <p className="mt-4 text-xl text-slate-700 dark:text-slate-200">{person.role}</p>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">{person.summary}</p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button label="View projects" href="#projects" />
                            <Button label="Contact me" href="#contact" variant="secondary" />
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

            <Section id="about" eyebrow="About" title="Building thoughtful interfaces with reusable components">
                <div className="grid gap-6 lg:grid-cols-2">
                    {about.map((paragraph) => (
                        <Card key={paragraph}>
                            <p className="leading-8 text-slate-600 dark:text-slate-300">{paragraph}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section
                id="skills"
                eyebrow="Skills"
                title="A practical frontend toolkit"
                description="Tập trung vào hệ thống component, chất lượng code và trải nghiệm người dùng nhất quán trên nhiều kích thước màn hình."
            >
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
                eyebrow="Experience"
                title="Recent work"
                description="Một vài chặng đường gần đây tập trung vào UI engineering, component reuse và product delivery."
            >
                <div className="grid gap-6">
                    {experiences.map((experience) => (
                        <Card key={`${experience.company}-${experience.role}`}>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{experience.role}</h3>
                                    <p className="mt-1 text-sm font-medium text-sky-500">{experience.company}</p>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{experience.period}</p>
                            </div>
                            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{experience.description}</p>
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

            <Section
                id="projects"
                eyebrow="Projects"
                title="Selected work"
                description="Danh sách project được render hoàn toàn từ data, giúp dễ mở rộng, quản trị nội dung và tái sử dụng card layouts."
            >
                <div className="grid gap-6 lg:grid-cols-2">
                    {projects.map((project) => (
                        <Card key={project.title} className="flex h-full flex-col">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                                {project.featured ? <Tag className="border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300">Featured</Tag> : null}
                            </div>
                            <p className="mt-4 flex-1 leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Tag key={tag}>{tag}</Tag>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-wrap gap-3">
                                {project.href ? <Button label="Live preview" href={project.href} size="sm" /> : null}
                                {project.repositoryHref ? <Button label="Repository" href={project.repositoryHref} variant="secondary" size="sm" /> : null}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section
                id="contact"
                eyebrow="Contact"
                title="Let’s build something useful"
                description={contact.intro}
            >
                <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                    <Card>
                        <Stack>
                            <p className="leading-8 text-slate-600 dark:text-slate-300">
                                Mình quan tâm tới các dự án frontend, website sản phẩm, internal tools và design system work. Nếu bạn có idea hoặc cơ hội phù hợp, hãy kết nối.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button label="Send email" href="mailto:hello@example.com" />
                                <Button label="Go to GitHub" href="https://github.com/" variant="secondary" />
                            </div>
                        </Stack>
                    </Card>

                    <Card>
                        <ul className="space-y-4">
                            {contact.items.map((item) => (
                                <li key={item.label}>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.label}</p>
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
