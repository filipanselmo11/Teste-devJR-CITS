import { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withThemeCreator, ThemeProvider } from "@material-ui/styles";
import api from "../service/index";
import CardQuadrinho from "../components/CardQuadrinho";

const theme = withThemeCreator();

export default function ListaQuadrinho() {
  const [quadrinhos, setQuadrinhos] = useState([]);

  const fetchData = () => {
    return api.get("/comics").then((response) => {
      return response?.data.data;
    });
  };

  const generateRare = (quadrinhos: any) => {
    let size = quadrinhos.length;
    let sizeRare = (size * 10) / 100;
    let arr = [];

    if (size > 0) {
      while (arr.length < sizeRare) {
        let r = Math.floor(Math.random() * size) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }

      for (let i = 0; i < arr.length; i++) {
        let index = arr[i];
        quadrinhos[index]["raro"] = true;
      }
      console.log("Quantidade de quadrinhos raros: ", arr);

      return quadrinhos;
    } else {
      return [];
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const { results } = await fetchData();
        setQuadrinhos(generateRare(results));
        console.log(results);
      } catch (erro) {
        console.log(erro);
      }
    };
    getData();
  }, [setQuadrinhos]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero Unit */}
        <Box>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Lista de Quadrinhos
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {quadrinhos ? (
              quadrinhos.map((quadrinho: any) => (
                <Grid item key={quadrinho.id} xs={12} sm={6} md={4}>
                  <CardQuadrinho
                    title={quadrinho.title}
                    thumbnail={quadrinho.thumbnail.path}
                    item={quadrinho}
                  />
                </Grid>
              ))
            ) : (
              <h1>Nenhum Quadrinho Encontrado</h1>
            )}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
