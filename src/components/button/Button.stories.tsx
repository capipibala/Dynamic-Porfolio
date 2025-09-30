import type { Story } from '@ladle/react';
import { Button } from './Button';

export const Primary: Story = () => <Button label="Click me 🚀" onClick={() => alert('Boom!')} />;

export const Secondary: Story = () => <Button label="Another one" onClick={() => console.log('Clicked!')} />;
