import React, { useContext } from 'react';
import Header from '../components/Header';
import CardArticle from '../components/CardArticle';
import { ArticlesContext } from '../contexts/articles';
import { Grid } from '@mui/material';
import { IArticle } from '../interfaces/IArticle';

function Home() {
  const { articles } = useContext(ArticlesContext);

  return (
    <>
      <Header />
      <Grid container spacing={4} p={2}>
        <Grid item xs={12}>
          {articles?.data?.map((article: IArticle) => (
            <Grid item key={article._id} spacing={2} p={2} mb={2}>
              <CardArticle article={article} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
