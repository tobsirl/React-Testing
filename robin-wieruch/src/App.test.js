import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // expect(screen.getByText('Search:')).toBeInTheDocument();

    // expect(screen.getByText('Search')).toBeInTheDocument();

    // expect(screen.getByText(/search/i)).toBeInTheDocument();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
