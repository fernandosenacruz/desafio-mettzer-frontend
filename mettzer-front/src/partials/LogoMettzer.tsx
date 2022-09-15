import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import hideOnMobile, { IFavoriteLinks } from '../utils/hideOnMobile';

function LogoMettzer({ shouldHideOnMobile}: IFavoriteLinks) {
  const hide = hideOnMobile(shouldHideOnMobile);

  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 3, ...hide }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src="https://www.mettzer.com/wp-content/uploads/2022/03/logo_mettzer_PRINCIPAL_EDITOR.png"
          alt="Logo Mettzer"
          width="80rem"
        />
      </Link>
    </Typography>
  );
}

export default LogoMettzer;
