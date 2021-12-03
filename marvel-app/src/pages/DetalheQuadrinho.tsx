import React, { useState } from "react";
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

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
          {quadrinho.creators
            ? quadrinho.creators.items[0].name
            : "Criador Indisponível"}
          {quadrinho.pageCount ? quadrinho.pageCount : "Página Indisponível"}
          {quadrinho.format ? quadrinho.format : "Formato Indisponível"}
          {quadrinho.series
            ? quadrinho.series.name
            : "Nome da Série Indisponível"}
          {quadrinho.description
            ? quadrinho.description
            : "Descrição Indisponível"}
          {quadrinho.prices[0]
            ? quadrinho.prices[0].price
            : "Preço Indisponível"}
        </Container>
      </Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}></Typography>
          <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-heaeder"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
