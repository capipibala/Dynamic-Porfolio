import type { Story } from '@ladle/react';
import { TextBox } from './TextBox';

export const Default: Story = () => <TextBox placeholder="Type here..." />;

export const WithLabel: Story = () => <TextBox label="Email" placeholder="jane@example.com" hint="We will never share your email." />;

export const ErrorState: Story = () => <TextBox label="Username" defaultValue="taken-name" error="This username is already taken." />;
