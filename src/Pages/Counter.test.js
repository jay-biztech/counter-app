import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Show counter', () => {
  test('should display proper description', () => {
    render(<Counter />);
    const paragraphElement = screen.getByText(/Total counter is/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('should visible the proper description', () => {
    render(<Counter />);
    const paragraphElement = screen.getByText(/Total counter is/i);
    expect(paragraphElement).toBeVisible();
  });
});

describe('Update count', () => {
  test('Increment the count', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /Increment/i });
    fireEvent.click(button);
    fireEvent.click(button);
    const paragraphElement = screen.getByText(/Total counter is: 2/i);
    expect(paragraphElement).toBeVisible();
  });

  test('Decrement the count', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /Decrement/i });
    fireEvent.click(button);
    fireEvent.click(button);
    const paragraphElement = screen.getByText(/Total counter is: -2/i);
    expect(paragraphElement).toBeVisible();
  });

  test('Reset the count', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /Reset/i });
    fireEvent.click(button);
    fireEvent.click(button);
    const paragraphElement = screen.getByText(/Total counter is: 0/i);
    expect(paragraphElement).toBeVisible();
  });
});
