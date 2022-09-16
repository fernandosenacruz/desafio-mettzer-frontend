import { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import CardArticle from '../components/CardArticle';
import { ArticlesContext } from '../contexts/articles';
import { Box, Grid } from '@mui/material';
import { IArticle } from '../interfaces/IArticle';
import PaginationLink from '../components/PaginationLink';

function Home() {
  const { articles } = useContext(ArticlesContext);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPageNumber(Math.ceil(articles.totalHits / 10));
  }, [articles, pageNumber]);

  return (
    <>
      <Header />
      <Grid container spacing={4} p={2}>
        {articles?.data?.map((article: IArticle) => (
          <Grid item md={6} key={article._id} p={2} mb={2}>
            <CardArticle article={article} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        p={2}
        mb={2}
      >
        <PaginationLink pageNumber={pageNumber} />
      </Box>
    </>
  );
}

export default Home;
