import { render, screen } from '@testing-library/react';

import App from './App';

test('renders app header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rezept-App/i);
  expect(linkElement).toBeInTheDocument();
});