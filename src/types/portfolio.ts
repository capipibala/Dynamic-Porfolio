export type NavItem = {
    label: string;
    href: string;
};

export type SocialLink = {
    label: string;
    href: string;
};

export type SkillGroup = {
    title: string;
    items: string[];
};

export type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    description: string;
    highlights: string[];
};

export type ProjectItem = {
    title: string;
    description: string;
    tags: string[];
    href?: string;
    repositoryHref?: string;
    featured?: boolean;
};

export type ContactItem = {
    label: string;
    value: string;
    href: string;
};

export type PortfolioData = {
    siteName: string;
    person: {
        name: string;
        role: string;
        summary: string;
        location: string;
        availability: string;
    };
    navigation: NavItem[];
    socialLinks: SocialLink[];
    stats: Array<{
        label: string;
        value: string;
    }>;
    about: string[];
    skillGroups: SkillGroup[];
    experiences: ExperienceItem[];
    projects: ProjectItem[];
    contact: {
        intro: string;
        items: ContactItem[];
    };
};