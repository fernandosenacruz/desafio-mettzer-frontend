import { IArticle } from '../interfaces/IArticle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicAccordion from './BasicAccordion';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  _source: {
    authors: string[];
    title: string;
    description: string;
    urls: string[];
  },
  _type: string
) => (
  <>
    <CardContent sx={{ backgroundColor: '#D3D3D3'}}>
      <BasicAccordion
        label="Authores"
        array={_source.authors}
        clickable={false}
      />
      <Typography variant="h5" component="div" mb={2}>
        {_source.title}
      </Typography>
      <Typography sx={{ mb: 2 , fontStyle: "italic"}} color="text.secondary">
        {_type}
      </Typography>
      <Typography variant="body2" mb={2}>{_source.description}</Typography>
      <BasicAccordion label="URLs" array={_source.urls} clickable={true} />
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </>
);

export default function CardArticle({
  article: { _source, _type },
}: {
  article: IArticle;
}) {
  return (
    <Box sx={{ minWidth: 250 }}>
      <Card variant="outlined">{card(_source, _type)}</Card>
    </Box>
  );
}
