import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface IBasicAccordion {
  label: string;
  array: string[];
  clickable: boolean;
}

export default function BasicAccordion({
  label,
  array,
  clickable,
}: IBasicAccordion) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!clickable
          ? array?.map((e, index) => (
              <Typography key={`${index}: ${e}`}>{e}</Typography>
            ))
          : array?.map((e, index) => (
              <Typography key={`${index}: ${e}`}>
                <a href={e}>{e}</a>
              </Typography>
            ))}
      </AccordionDetails>
    </Accordion>
  );
}
