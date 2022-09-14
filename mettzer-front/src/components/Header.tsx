import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { getArticles } from '../api/api';
import { ArticlesContext } from '../contexts/articles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  color: '#00DB87',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

export default function Header() {
  const { articles, setArticles } = useContext(ArticlesContext);
  const [keyword, setKeyword] = useState('');

  const handleChange = (target: HTMLInputElement | HTMLTextAreaElement): void =>
    setKeyword(target.value);

  const searchArticles = async () => {
    const { data } = await getArticles(`${keyword}`, '1');

    setArticles({...articles, data});
  };

  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: 'white' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: '#00DB87' }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 3, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src="https://www.mettzer.com/wp-content/uploads/2022/03/logo_mettzer_PRINCIPAL_EDITOR.png"
                alt="Logo Mettzer"
                width="80rem"
              />
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: '#00DB87',
            }}
          >
            Favoritos
          </Typography>
          <Search>
              <Button
                sx={{ color: '#00DB87' }}
                type="button"
                onClick={() => searchArticles()}
              >
                <SearchIcon />
              </Button>
            <StyledInputBase
              sx={{ color: '#212121' }}
              placeholder="Palavra chave…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={({ target }) => handleChange(target)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
