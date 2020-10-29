import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  media: {
    height: 80
  }
});

export default function View(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <FolderIcon fontSize="large" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h4">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.oneditclk}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={props.ondelclk}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
