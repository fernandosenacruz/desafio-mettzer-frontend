import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Home from '../../../pages/Home';

test('should render home', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const authors = screen.getByRole('button', { name: /authores/i });
  const title = screen.getByTestId('article-title');
  const type = screen.getByTestId('article-type');
  const description = screen.getByTestId('article-description');

  expect(authors).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(type).toBeInTheDocument();
  expect(description).toBeInTheDocument();
})

test('should favorite an article', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  let favoriteIcon = screen.getByTestId('FavoriteBorderIcon');

  expect(favoriteIcon).toBeInTheDocument();

  userEvent.click(favoriteIcon);

  favoriteIcon = screen.getByTestId('FavoriteIcon');

  expect(favoriteIcon).toBeInTheDocument();
})

test('the array of urls should contain urls clickable', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const urls = screen.getByRole('button', { name: /urls/i });

  expect(urls).toBeInTheDocument();

  const urlDropdown = screen.getAllByTestId('ExpandMoreIcon');

  userEvent.click(urlDropdown[1]);

  const url = screen.getByTestId('url 1');

  expect(url).toBeInTheDocument();
  expect(url).toHaveAttribute('href');
})