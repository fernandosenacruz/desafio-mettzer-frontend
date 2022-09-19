import { Dispatch } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PaginationFavorites({
  pageNumber,
  callBack,
}: {
  pageNumber: number;
  callBack: Dispatch<React.SetStateAction<number>>;
}) {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    if (value) callBack(value - 1);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        color="primary"
        onChange={handleChange}
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
