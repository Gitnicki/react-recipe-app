import { render, screen } from '@testing-library/react';

import Footer from './Footer';

test('renders footer with correct year', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/2024 Rezept-App/i);
  expect(linkElement).toBeInTheDocument();
});