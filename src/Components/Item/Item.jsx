import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Item({ element }) {
  return (
    <Card
      sx={{
        width: 345,
        height: 330,
        background: "black",
        color: "white",
        borderRadius: "10px",
        marginTop: { xs: "20px" },
        border: "1px solid black",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <CardMedia
        sx={{ height: 140, backgroundPosition: "20% 40%" }}
        image={element.img}
        title="green iguana"
      />
      <CardContent sx={{ color: "white" }}>
        <Typography gutterBottom variant="h6" component="div">
          {element.title}
        </Typography>
        <Typography variant="body2" color="white">
          {element.description}
        </Typography>
        <Typography variant="body">${element.price}.-</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${element.id}`}>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            sx={{ background: "#9b2226" }}
          >
            Ver detalles
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default Item;
