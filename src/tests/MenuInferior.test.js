import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('testes no menu inferior', () => {
  test('teste se o menu inferior possui os botões', () => {
    render(<App />);
    const drinkIcon = screen.getByTestId(/drinks-bottom-btn/i);
    const exploreIcon = screen.getByTestId(/explore-bottom-btn/i);
    const mealsIcon = screen.getByTestId(/food-bottom-btn/i);
    expect(drinkIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(mealsIcon).toBeInTheDocument();
  });
});
