import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { favoritesMock, keywordsMock } from '../../mocks/favoritesMock';
import CardFavorites from '../../../components/CardFavorites';
import PaginationFavorites from '../../../components/PaginationFavorites';
import Favorites from '../../../pages/Favorites';

test('should render articles favorited', () => {
  const mock = jest.fn().mockReturnValue(favoritesMock);
  const favorites = mock();

  render(
    <MemoryRouter>
      <CardFavorites
        authors={favorites[0].authors}
        title={favorites[0].title}
        description={favorites[0].description}
        urls={favorites[0].urls}
      />
      <PaginationFavorites
        pageNumber={favorites.length}
        callBack={() => { }}
      />
    </MemoryRouter>
  );

  const authors = screen.getByRole('button', { name: /authores/i });
  const title = screen.getByTestId('favorite-title');
  const description = screen.getByTestId('favorite-description');
  const urls = screen.getByRole('button', { name: /urls/i });
  const paginationArticles = screen.getAllByRole('button');

  expect(authors).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(urls).toBeInTheDocument();
  paginationArticles.map(p => (expect(p).toBeInTheDocument()));
})

test('should render history of keywords', () => {
  render(
    <MemoryRouter>
      <Favorites />
    </MemoryRouter>
  );

  const historyKeywords = screen.getByTestId('history-keywords');
  const keyword = screen.queryAllByTestId('keyword 0');
  const paginationArticles = screen.getAllByRole('button');

  expect(historyKeywords).toBeInTheDocument();
  expect(keyword[0]).toBeInTheDocument();
  paginationArticles.map(p => (expect(p).toBeInTheDocument()));
})