import { render, screen } from '@testing-library/react';
import Header from './components/Header/Header';

test('renders learn react link', () => {
  render(<Header title="Todo" />);

  const linkElement = screen.getByText(/todo/i);

  expect(linkElement).toBeInTheDocument();
});
