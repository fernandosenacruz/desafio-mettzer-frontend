import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../../components/Header';

test('should render a header with a menu, favorites and searchBar on Home', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  );

  const menuIcon = screen.getByTestId('MenuIcon');
  const logoMettzer = screen.getByAltText('Logo Mettzer');
  const favoritesIcon = screen.getByText('Favoritos');
  const searchIcon = screen.getByTestId('SearchIcon');
  const searchInput = screen.getByPlaceholderText('Palavra chave…');

  expect(menuIcon).toBeInTheDocument();
  expect(logoMettzer).toBeInTheDocument();
  expect(favoritesIcon).toBeInTheDocument();
  expect(searchIcon).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();

  userEvent.click(menuIcon);

  const drawer = screen.getByTestId('sentinelStart');

  expect(drawer).toBeInTheDocument();
})

test('should render a header with a menu and favorites on Favorites', () => {
  render(
    <MemoryRouter initialEntries={['/favorites']}>
      <Header />
    </MemoryRouter>
  );

  const menuIcon = screen.getByTestId('MenuIcon');
  const logoMettzer = screen.getByAltText('Logo Mettzer');
  const favoritesIcon = screen.getByText('Favoritos');
  const searchIcon = screen.queryByTestId('SearchIcon');
  const searchInput = screen.queryByPlaceholderText('Palavra chave…');

  expect(menuIcon).toBeInTheDocument();
  expect(logoMettzer).toBeInTheDocument();
  expect(favoritesIcon).toBeInTheDocument();
  expect(searchIcon).not.toBeInTheDocument();
  expect(searchInput).not.toBeInTheDocument();
})