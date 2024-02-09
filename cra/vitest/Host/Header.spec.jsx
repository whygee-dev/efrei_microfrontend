import { describe, it, expect } from 'vitest';
import Header from '../../host/src/Header';
import { render, screen } from '@testing-library/react';
import exp from 'constants';

describe('Host Header', () => {
  it('should render a header', async () => {
    render(<Header />);

    const title = await screen.findByText('Host Header');

    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H1');
    expect(title.textContent).toBe('Host Header');
    expect(title.parentElement.tagName).toBe('HEADER');
    expect(title.parentElement.querySelector('nav')).not.toBeNull();
  });
});
