import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
    siteName: 'My Portfolio',
    person: {
        name: 'Capibala',
        role: 'Software Engineer · Frontend, Systems, and UI Architecture',
        summary:
            'I build modern products across frontend and systems programming, combining React and TypeScript with strong engineering fundamentals in C++, Rust, and C# to create scalable, maintainable user experiences.',
        location: 'Ho Chi Minh City, Vietnam',
        availability: 'Open to freelance, consulting, and full-time opportunities',
    },
    navigation: [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ],
    socialLinks: [
        { label: 'GitHub', href: 'https://github.com/' },
        { label: 'LinkedIn', href: 'https://linkedin.com/' },
        { label: 'Email', href: 'mailto:hello@example.com' },
    ],
    stats: [
        { label: 'Years of experience', value: '10+' },
        { label: 'Projects delivered', value: '30+' },
        { label: 'Primary stack', value: 'React · C++ · Rust · C#' },
    ],
    about: [
        'I focus on building highly reusable interfaces that stay maintainable and consistent across product surfaces, from landing pages to internal tools and large applications.',
        'I enjoy combining modern frontend engineering with systems-level thinking, accessibility, responsive design, and component-driven workflows backed by tests and stories.',
    ],
    skillGroups: [
        {
            title: 'Frontend',
            items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML', 'CSS', 'C#'],
        },
        {
            title: 'UI Engineering',
            items: ['Design Systems', 'Responsive Design', 'Accessibility', 'Component Architecture', 'C++', 'Rust'],
        },
        {
            title: 'Quality',
            items: ['Vitest', 'Testing Library', 'Ladle', 'ESLint', 'Prettier'],
        },
    ],
    experiences: [
        {
            company: 'Acme Studio',
            role: 'Senior Software Engineer',
            period: '2020 — Present',
            description:
                'Leading product interface development and engineering architecture across frontend and application layers, with a focus on maintainability, performance, and developer experience.',
            highlights: [
                'Built and standardized shared UI components for multiple feature teams.',
                'Improved UI consistency through reusable tokens, variants, and layout primitives.',
                'Worked across React, C#, and Rust-based tooling and application workflows.',
            ],
        },
        {
            company: 'Independent Consulting',
            role: 'Software Engineer',
            period: '2014 — 2020',
            description:
                'Designed and delivered software solutions ranging from web applications to internal tools, balancing product UX with robust engineering implementation.',
            highlights: [
                'Built responsive, production-ready interfaces for a wide range of clients.',
                'Delivered maintainable solutions using TypeScript, C++, C#, and later Rust.',
            ],
        },
    ],
    projects: [
        {
            title: 'Portfolio System',
            description:
                'A personal portfolio built with a custom component system, focused on reuse, accessibility, and long-term growth.',
            tags: ['React', 'TypeScript', 'Tailwind', 'Vitest'],
            featured: true,
        },
        {
            title: 'UI Component Library Sandbox',
            description:
                'A playground for shared UI components, with Ladle stories and tests using Testing Library.',
            tags: ['Ladle', 'Testing Library', 'Design System'],
            featured: true,
        },
        {
            title: 'Responsive Landing Pages',
            description:
                'Landing pages optimized for conversion, with a focus on visual hierarchy and loading performance.',
            tags: ['Responsive', 'SEO', 'Performance'],
        },
    ],
    contact: {
        intro: 'If you are looking for a frontend engineer with a systems mindset, I would be happy to talk.',
        items: [
            { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
            { label: 'GitHub', value: 'github.com/your-profile', href: 'https://github.com/' },
            { label: 'LinkedIn', value: 'linkedin.com/in/your-profile', href: 'https://linkedin.com/' },
        ],
    },
};
