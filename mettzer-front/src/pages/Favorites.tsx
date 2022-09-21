import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardFavorites from '../components/CardFavorites';
import localStorageGetItem from '../utils/localStorageGetItem';
import { Grid, Typography } from '@mui/material';
import PaginationFavorites from '../components/PaginationFavorites';
import { ISourceCardDetails } from '../interfaces/IArticle';

function Favorites() {
  const [indexOfKeyword, setIndexOfKeyword] = useState(0);
  const [indexOfFavorite, setIndexOfFavorite] = useState(0);

  const favorites: ISourceCardDetails[] | [] = localStorageGetItem('favorites');
  const keywords = localStorageGetItem('keywords');

  useEffect(() => { }, [indexOfKeyword, indexOfFavorite]);

  return (
    <>
      <Header />
      <Grid container spacing={4} p={2}>
        {favorites && (
          <Grid item md={5} p={2} mb={2}>
            <Typography
              data-testid="favorite-articles"
              variant="h6"
              component="div"
              mb={2}
            >
              Artigos favoritos
            </Typography>
            <CardFavorites
              authors={favorites[indexOfFavorite]?.authors}
              title={favorites[indexOfFavorite]?.title}
              description={favorites[indexOfFavorite]?.description}
              urls={favorites[indexOfFavorite]?.urls}
            />
            <PaginationFavorites
              pageNumber={favorites?.length}
              callBack={setIndexOfFavorite}
            />
          </Grid>
        )}
        <Grid item md={4} p={2} mb={2}>
          <Typography variant="h6" component="div" mb={2}>
            Histórico de pesquisas
          </Typography>
          {keywords && (
            <>
              <Typography sx={{ mb: 2, fontStyle: 'italic', color: '#00DB87' }}>
                {keywords[indexOfKeyword]}
              </Typography>
              <PaginationFavorites
                pageNumber={keywords?.length}
                callBack={setIndexOfKeyword}
              />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Favorites;
