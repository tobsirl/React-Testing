import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../../App';

describe('tests for the counter app', () => {
  it('should have the title of My Counter', () => {
    render(<App />);

    const title = screen.getByRole('heading', { name: /my counter/i });

    expect(title).toBeInTheDocument();
  });

  it('should test that the rest button works', () => {
    // Arrange
    render(<App />);

    const count = screen.getByRole('heading', { name: /0/i });
    const plusBtn = screen.getByRole('button', { name: /\+/i });
    const resetBtn = screen.getByRole('button', { name: /reset/i });

    // click the + button twice
    userEvent.click(plusBtn);
    userEvent.click(plusBtn);

    // check for 2
    expect(count).toHaveTextContent('2');

    // click the reset button
    userEvent.click(resetBtn);

    // check for 0
    expect(count).toHaveTextContent('0');
  });
});
