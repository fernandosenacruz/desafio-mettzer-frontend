import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ISourceCardDetails } from '../interfaces/IArticle';
import BasicAccordion from './BasicAccordion';

export default function CardFavorites({
  authors,
  title,
  description,
  urls,
}: ISourceCardDetails) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <BasicAccordion
          label="Authores"
          array={authors}
          clickable={false}
        />
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <BasicAccordion label="URLs" array={urls} clickable={true} />
      </CardContent>
    </Card>
  );
}
