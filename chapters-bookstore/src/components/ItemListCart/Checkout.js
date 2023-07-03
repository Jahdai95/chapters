import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearIcon from "@material-ui/icons/Clear";

import { CartContext } from "../../context/CartContext";

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

export default function Checkout(props) {
  const classes = useStyles();
  const { items, clearCart, removeItem } = useContext(CartContext);
  return (
    <>
      <List>
        {items && items.length > 0 ? (
          items.map((item, index) => {
            return (
              <ListItem
                button
                alignItems="flex-start"
                key={`${item.id}-checkout-${index}`}
              >
                <ListItemAvatar>
                  <div className={classes.containerThumbnail}>
                    <img
                      alt="thumbnail"
                      className={classes.thumbnail}
                      src={item.book.image}
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
                      {item.book.title}
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
                        {item.quantity} X {item.book.price}
                      </Typography>
                    </>
                  }
                />
                <IconButton
                  key={`${item.id}-button`}
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  onClick={() => removeItem(item.book.id, item.quantity)}
                >
                  <ClearIcon />
                </IconButton>
              </ListItem>
            );
          })
        ) : (
          <ListItem button alignItems="flex-start">
            <p>No hay libros en el carrito</p>
          </ListItem>
        )}
      </List>
      {items.length > 0 && (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => clearCart()}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </>
  );
}
