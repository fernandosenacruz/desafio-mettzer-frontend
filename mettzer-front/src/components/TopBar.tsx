import { Dispatch } from 'react';
import LogoMettzer from '../partials/LogoMettzer';
import FavoritesLink from '../partials/FavoritesLink';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material';

type Anchor = 'top';

interface IShowDrawer {
  showDrawer: boolean;
  setShowDrawer: Dispatch<boolean>;
}

function TopBar({ showDrawer, setShowDrawer }: IShowDrawer) {
  const drawer = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={() => setShowDrawer(!showDrawer)}
    >
      <List>
        <Grid container>
          {['Início', 'Favoritos'].map((text, index) => (
            <Grid item key={text} xs={6}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <LogoMettzer /> : <FavoritesLink />}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
      <Divider />
    </Box>
  );
  return (
    <Drawer anchor="top" open={showDrawer} onClose={() => setShowDrawer(false)}>
      {drawer('top')}
    </Drawer>
  );
}

export default TopBar;
