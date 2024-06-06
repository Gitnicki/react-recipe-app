import { fireEvent, render, screen } from '@testing-library/react';

import Header from './Header';
import { ThemeProvider } from '../../context/ThemeContext';

jest.mock('../../context/ThemeContext', () => ({
  useTheme: () => ({
    theme: 'light', 
    toggleTheme: jest.fn(), 
  }),
}));

test('toggles theme when theme switcher is clicked', () => {
  render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );

  const switcher = screen.getByRole('button');
  fireEvent.click(switcher);

  expect(document.documentElement).toHaveClass('dark');
});
