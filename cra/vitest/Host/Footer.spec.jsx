import { describe, it, expect } from 'vitest';
import Footer from '../../host/src/Footer';
import { render, screen } from '@testing-library/react';

describe('Host Footer', () => {
  it('should render a footer', async () => {
    render(<Footer />);

    const title = await screen.findByText('Host Footer');

    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H1');
    expect(title.textContent).toBe('Host Footer');
    expect(title.parentElement.tagName).toBe('FOOTER');
    expect(title.parentElement.querySelector('nav')).not.toBeNull();
  });
});
