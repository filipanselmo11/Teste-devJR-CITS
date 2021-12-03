
import { useLocation } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function DetalheQuadrinho() {
  const location: any = useLocation();
  const quadrinho = location.state.data;
  console.log(quadrinho);

  return (
    <div>
      <Box>
        <Container maxWidth="sm">
          <Typography component="h2" variant="inherit" color="text.primary">
            {quadrinho?.title}
          </Typography>
          <Paper variant="outlined">
            <img
              src={quadrinho?.thumbnail.path + ".jpg"}
              alt={quadrinho.title}
            />
          </Paper>
        </Container>
        <Container maxWidth="sm">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Criador</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {quadrinho.creators
                  ? quadrinho.creators.items[0].name
                  : "Criador Indisponível"}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Páginas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {quadrinho.pageCount
                  ? quadrinho.pageCount
                  : "Quantidade de Páginas Indisponível"}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Formato</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {quadrinho.format ? quadrinho.format : "Formato Indisponível"}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>Série</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {quadrinho.series
                  ? quadrinho.series.name
                  : "Nome da Série Indisponível"}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>Descrição</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {quadrinho.description
                  ? quadrinho.description
                  : "Descrição Indisponível"}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography>Preço</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {quadrinho.prices[0]
                  ? quadrinho.prices[0].price
                  : "Preço Indisponível"}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </div>
  );
}
