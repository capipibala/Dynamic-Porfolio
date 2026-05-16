import type { Story } from '@ladle/react';
import { Button } from './Button';

export const Primary: Story = () => <Button label="Primary action" />;

export const Secondary: Story = () => <Button label="Secondary action" variant="secondary" />;

export const Ghost: Story = () => <Button label="Ghost action" variant="ghost" />;

export const LinkButton: Story = () => <Button label="Visit project" href="#projects" />;

export const Sizes: Story = () => (
    <div className="flex flex-wrap items-center gap-4">
        <Button label="Small" size="sm" />
        <Button label="Medium" size="md" />
        <Button label="Large" size="lg" />
    </div>
);
