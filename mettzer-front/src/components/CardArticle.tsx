import { IArticle, ISourceCardDetails } from '../interfaces/IArticle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicAccordion from './BasicAccordion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import findFavorited from '../utils/findFavorited';
import localStorageGetItem from '../utils/localStorageGetItem';

const card = (
  _source: ISourceCardDetails,
  _type: string,
  favorites: ISourceCardDetails[],
  handleFavorite: Function
) => {
  const favorited = findFavorited(favorites, _source.id);

  return (
    <>
      <CardContent sx={{ backgroundColor: '#D3D3D3' }}>
        <BasicAccordion
          label="Authores"
          array={_source.authors}
          clickable={false}
        />
        <Typography
          data-testid="article-title"
          variant="h5"
          component="div" mb={2}
        >
          {_source.title}
        </Typography>
        <Typography
          data-testid="article-type"
          color="text.secondary"
          sx={{ mb: 2, fontStyle: 'italic' }}
        >
          {_type}
        </Typography>
        <Typography data-testid="article-description" variant="body2" mb={2}>
          {_source.description}
        </Typography>
        <BasicAccordion label="URLs" array={_source.urls} clickable={true} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleFavorite(_source)}>
          {favorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </CardActions>
    </>
  );
};

export default function CardArticle({
  article: { _source, _type },
  favorites,
  setFavorites,
}: {
  article: IArticle;
  favorites: ISourceCardDetails[];
  setFavorites: Function;
}) {
  const addFavorites = (
    storage: ISourceCardDetails[] | [],
    article: ISourceCardDetails
  ) => {
    const newStorage = [...storage, article];

    localStorage.setItem('favorites', JSON.stringify(newStorage));

    setFavorites(newStorage);
  };

  const unfavorite = (
    storage: ISourceCardDetails[] | [],
    article: ISourceCardDetails
  ) => {
    const item = storage.map((item) => item.id).indexOf(article.id);

    if (item !== -1) {
      storage.splice(item, 1);

      localStorage.setItem('favorites', JSON.stringify(storage));

      setFavorites(storage);
    }
  };

  const handleFavorite = ({
    id,
    authors,
    title,
    description,
    urls,
  }: ISourceCardDetails) => {
    const ARTICLE = { id, authors, title, description, urls };
    const storage = localStorageGetItem('favorites');
    const favorited = findFavorited(storage, id);

    if (favorited) {
      unfavorite(storage, ARTICLE);
    } else {
      addFavorites(storage, ARTICLE);
    }
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <Card variant="outlined">
        {card(_source, _type, favorites, handleFavorite)}
      </Card>
    </Box>
  );
}
