import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 232,
    height: 350,
    margin: 10,
    background: "#0D0D0D",
    borderRadius: 32,
    color: "white",
  },
  media: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    margin: "auto",
  },
});

const MediaCard = ({
  name,
  species,
  image,
  type,
  setCollection,
  show,
  collection,
}) => {
  const classes = useStyles();

  const handleClick = (select) => {
    setCollection((prevState) => [...prevState, select]);
  };

  const handleClickRemove = (select) => {
    const filter = collection.filter((item) => item.name !== select.name);
    setCollection(filter);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="white" component="p">
            {species}
          </Typography>
        </CardContent>
      </CardActionArea>
      {show && (
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handleClick({
                name: name,
                species: species,
                image: image,
                type: type,
              });
            }}
          >
            Favoritar
          </Button>
        </CardActions>
      )}
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            handleClickRemove({
              name: name,
              species: species,
              image: image,
              type: type,
            })
          }
        >
          Remover
        </Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
