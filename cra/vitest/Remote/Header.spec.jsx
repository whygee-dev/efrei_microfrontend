import { describe, it, expect } from 'vitest';
import Header from '../../remote/src/Header';
import { render, screen } from '@testing-library/react';

describe('Remote Header', () => {
  it('should render a header', async () => {
    render(<Header />);

    const title = await screen.findByText('Remote Header');

    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H1');
    expect(title.textContent).toBe('Remote Header');
    expect(title.parentElement.tagName).toBe('HEADER');
    expect(title.parentElement.querySelector('nav')).not.toBeNull();
  });
});
