import { useContext } from 'react';
import { ArticlesContext } from '../contexts/articles';
import { Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getArticles } from '../api/api';

interface IPageNumber {
  pageNumber: number;
}

export default function PaginationLink({ pageNumber }: IPageNumber) {
  const { keyword, articles, setArticles } = useContext(ArticlesContext);

  const handleChangePage = async (target: any) => {
    const value = target.innerText;
    if (value && keyword) {
      const data = await getArticles(`${keyword}`, value);

      setArticles({ ...articles, data: data?.data.data });
    }
  };

  return (
    <Stack spacing={2}>
      <Pagination
        color="primary"
        onClick={({ target }) => handleChangePage(target)}
        count={pageNumber}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
