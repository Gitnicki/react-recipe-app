import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';

import RecipeDetail from './RecipeDetail';
import axios from 'axios';

jest.mock('axios');

const mockRecipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    ingredients: [
      '400g Spaghetti',
      '200g Pancetta',
      '4 große Eier',
      '100g geriebener Parmesan',
      'Schwarzer Pfeffer',
      'Salz'
    ],
    steps: [
      'Pasta nach Packungsanweisung in Salzwasser kochen.',
      'Pancetta in einer Pfanne knusprig braten.',
      'Eier und Parmesan in einer Schüssel mischen.',
      'Gekochte Pasta mit der Pancetta, der Eier-Käse-Mischung vermengen und schnell umrühren.',
      'Mit Salz und reichlich frisch gemahlenem schwarzen Pfeffer abschmecken.'
    ],
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww'
  },
];

test('fetches and renders recipe details', async () => {
  const mockRecipeId = 1;
  axios.get.mockResolvedValueOnce({ data: mockRecipes.find(recipe => recipe.id === mockRecipeId) });
  render(
    <MemoryRouter initialEntries={[`/${mockRecipeId}`]}>
      <Route path="/:id">
        <RecipeDetail />
      </Route>
    </MemoryRouter>
  );

  await waitFor(() => expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument());
  expect(screen.getByText('Pasta nach Packungsanweisung in Salzwasser kochen.')).toBeInTheDocument();
  expect(screen.getByText('Pancetta in einer Pfanne knusprig braten.')).toBeInTheDocument();
  expect(screen.getByText('Eier und Parmesan in einer Schüssel mischen.')).toBeInTheDocument();
  expect(screen.getByText('Gekochte Pasta mit der Pancetta, der Eier-Käse-Mischung vermengen und schnell umrühren.')).toBeInTheDocument();
  expect(screen.getByText('Mit Salz und reichlich frisch gemahlenem schwarzen Pfeffer abschmecken.')).toBeInTheDocument();
});