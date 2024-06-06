import { render, screen, waitFor } from '@testing-library/react';

import Main from './Main';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

jest.mock('axios');

const mockRecipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

test('fetches and renders recipes', async () => {
  axios.get.mockResolvedValueOnce({ data: mockRecipes });

  render(
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  );
  
  await waitFor(() => expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument());
  expect(screen.getByText('Caesar Salad')).toBeInTheDocument();
  
});