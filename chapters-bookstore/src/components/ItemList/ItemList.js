import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
  root: {
    "& > .MuiIconButton-root:hover": {
      backgroundColor: "red",
    },
  },
  containerThumbnail: {
    marginRight: 10,
  },
  thumbnail: {
    width: "80px",
  },
});

export default function ItemList(props) {
  const { greeting } = props;

  const classes = useStyles();

  return (
    <List>
      <span>{greeting}</span>
      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <div className={classes.containerThumbnail}>
            <img
              alt="thumbnail"
              className={classes.thumbnail}
              src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/30.jpg"
            />
          </div>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component="p"
              variant="h6"
              className={classes.inline}
              color="textPrimary"
            >
              Surrounded by Idiots
            </Typography>
          }
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                1 X $825
              </Typography>
            </>
          }
        />
      </ListItem>
    </List>
  );
}
