import { render, screen } from '@testing-library/react';
import App from './App';

describe('tests for the counter app', () => {
  it('should have the title of My Counter', () => {
    render(<App />);

    const title = screen.getByRole('heading', { name: /my counter/i });

    expect(title).toBeInTheDocument();
  });
});
