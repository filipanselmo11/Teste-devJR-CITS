import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";

interface Props {
  title: String;
  thumbnail: String;
  item: any;
}

export default function CardQuadrinho(props: Props) {
  const history = useHistory();

  const goDetalhes = () => {
    history.push({
      pathname: "/detalhe-quadrinho",
      state: { data: props.item },
    });
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={goDetalhes}
    >
      <CardMedia
        component="img"
        image={props.thumbnail + "/portrait_xlarge.jpg"}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.item.raro ? (
            <Badge badgeContent={"Raro"} color="primary">
            {props.title}
          </Badge>
          ): (props.title)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Quadrinho</Button>
      </CardActions>
    </Card>
  );
}
