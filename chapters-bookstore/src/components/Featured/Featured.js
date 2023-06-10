import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";

const useStyles = makeStyles((theme) => ({
  features: {
    marginTop: "2rem",
    height: "10rem",
    background: "#f1f2f5",
  },
}));

export default function Featured() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.features}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={3}>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BookOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="12 MILLONES DE LIBROS"
              secondary="Lee millones de libros online"
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={3}>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocalShippingOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="ENVIO GRATIS"
              secondary="Para pedidos de $50 y más"
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={3}>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EventOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="30 DÍAS DEVOLUCIONES"
              secondary="Política de reembolso sencilla"
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
