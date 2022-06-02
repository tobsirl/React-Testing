import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

it('button has correct initial text', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  expect(colorButton).toHaveTextContent(/change to blue/i);
});

it('button turns blue when clicked', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: /change to blue/i });

  // click the button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be "Change to red"
  expect(colorButton).toHaveTextContent(/change to red/i);
});

it('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts our unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

it('if checkbox is checked then the button should be disabled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  expect(colorButton).toBeEnabled();

  // get the checkbox
  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).toBeEnabled();
});

it('disable button has gray background and reverts to red', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

it('should click button to change color, disable button and check if gray', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
});

it('should check that enable button is blue', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /change to blue/i });
  const checkbox = screen.getByRole('checkbox', { name: /disable button/i });

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);

  expect(checkbox).toBeEnabled();

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});

