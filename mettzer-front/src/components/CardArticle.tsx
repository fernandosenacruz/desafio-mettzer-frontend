import { IArticle, ISource, ISourceCardDetails } from '../interfaces/IArticle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicAccordion from './BasicAccordion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const card = (
  _source: ISourceCardDetails,
  _type: string,
  handleFavorite: Function
) => {
  const favorited = localStorage.getItem('favorites') || '';
  console.log(favorited);

  return (
    <>
      <CardContent sx={{ backgroundColor: '#D3D3D3' }}>
        <BasicAccordion
          label="Authores"
          array={_source.authors}
          clickable={false}
        />
        <Typography variant="h5" component="div" mb={2}>
          {_source.title}
        </Typography>
        <Typography sx={{ mb: 2, fontStyle: 'italic' }} color="text.secondary">
          {_type}
        </Typography>
        <Typography variant="body2" mb={2}>
          {_source.description}
        </Typography>
        <BasicAccordion label="URLs" array={_source.urls} clickable={true} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleFavorite(_source)}>
          {favorited ? <FavoriteBorderIcon /> : <FavoriteIcon />}
        </Button>
      </CardActions>
    </>
  );
};

export default function CardArticle({
  article: { _source, _type },
}: {
  article: IArticle;
}) {
  const handleFavorite = ({
    authors,
    title,
    description,
    urls,
  }: ISourceCardDetails) => {
    const favorites = localStorage.getItem('favorites') || '';

    if (favorites) {
      const parsedFavorites = JSON.parse(favorites);

      localStorage.setItem(
        'favorites',
        JSON.stringify([
          ...parsedFavorites,
          { authors, title, description, urls },
        ])
      );
    } else {
      localStorage.setItem(
        'favorites',
        JSON.stringify([{ authors, title, description, urls }])
      );
    }
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <Card variant="outlined">{card(_source, _type, handleFavorite)}</Card>
    </Box>
  );
}
