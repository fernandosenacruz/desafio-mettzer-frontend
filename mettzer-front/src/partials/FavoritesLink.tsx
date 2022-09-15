import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import hideOnMobile, { IFavoriteLinks } from '../utils/hideOnMobile';

function FavoritesLink({ shouldHideOnMobile }: IFavoriteLinks) {
  const hide = hideOnMobile(shouldHideOnMobile);

  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{
        flexGrow: 1,
        ...hide,
        color: '#00DB87',
      }}
    >
      <Link
        to="/favorites"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        Favoritos
      </Link>
    </Typography>
  );
}

export default FavoritesLink;
