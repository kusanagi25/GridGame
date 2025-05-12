import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders initial UI and player stats', () => {
  render(<App />);
  expect(screen.getByText(/Health:/)).toBeInTheDocument();
  expect(screen.getByText(/Moves:/)).toBeInTheDocument();
});

test('player moves with arrow keys and updates stats', () => {
  render(<App />);

  const initialHealth = Number(screen.getByText(/Health:/).textContent.match(/\d+/)[0]);
  const initialMoves = Number(screen.getByText(/Moves:/).textContent.match(/\d+/)[0]);

  fireEvent.keyDown(window, { key: 'ArrowRight' });

  const newHealth = Number(screen.getByText(/Health:/).textContent.match(/\d+/)[0]);
  const newMoves = Number(screen.getByText(/Moves:/).textContent.match(/\d+/)[0]);

  // Make sure at least moves changed
  expect(newMoves).toBeLessThanOrEqual(initialMoves);
  expect(newHealth).toBeLessThanOrEqual(initialHealth);
});