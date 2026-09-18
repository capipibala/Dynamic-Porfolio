import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectExplorer } from './ProjectExplorer';

it('combines case-insensitive search with technology filtering and resets empty results', async () => {
    const user = userEvent.setup();
    render(
        <ProjectExplorer
            projects={[
                { title: 'Portfolio', description: 'Personal site', tags: ['React'], href: 'https://example.com' },
                { title: 'Tools', description: 'React utilities', tags: ['Rust'] },
            ]}
        />,
    );
    await user.type(screen.getByRole('searchbox'), ' REACT ');
    expect(screen.getByRole('status')).toHaveTextContent('2 of 2');
    await user.selectOptions(screen.getByLabelText('Technology'), 'Rust');
    expect(screen.queryByRole('heading', { name: 'Portfolio' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tools' })).toBeInTheDocument();
    await user.type(screen.getByRole('searchbox'), 'missing');
    expect(screen.getByText(/No projects match/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(screen.getByRole('status')).toHaveTextContent('2 of 2');
    expect(screen.getByRole('link', { name: 'Live preview' })).toHaveAttribute('href', 'https://example.com');
});
