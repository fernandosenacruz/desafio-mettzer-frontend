import { useState, useContext } from 'react';
import { getArticles } from '../api/api';
import { ArticlesContext } from '../contexts/articles';
import LogoMettzer from '../partials/LogoMettzer';
import FavoritesLink from '../partials/FavoritesLink';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Button } from '@mui/material';
import TopBar from './TopBar';

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
  const [showDrawer, setShowDrawer] = useState(false);

  const handleChange = (target: HTMLInputElement | HTMLTextAreaElement): void =>
    setKeyword(target.value);

  const searchArticles = async () => {
    const { data } = await getArticles(`${keyword}`, '1');

    setArticles({ ...articles, data });
  };

  return (
    <>
      <Box sx={{ flexGrow: 3 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: 'white' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => setShowDrawer(!showDrawer)}
            >
              <MenuIcon sx={{ color: '#00DB87' }} />
            </IconButton>
            <LogoMettzer shouldHideOnMobile={true}/>
            <FavoritesLink shouldHideOnMobile={true} />
            <Search>
              <Button
                sx={{ color: '#00DB87' }}
                type="button"
                onClick={() => searchArticles()}
              >
                <SearchIcon />
              </Button>
              <StyledInputBase
                sx={{ color: '#212121' , fontSize: { xs: '14px', sm: '18px', md: '22px'}}}
                placeholder="Palavra chave…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={({ target }) => handleChange(target)}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <TopBar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
}
