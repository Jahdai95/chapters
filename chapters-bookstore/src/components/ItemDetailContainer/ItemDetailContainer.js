import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { books } from "../../mocks/books";
import { useParams } from "react-router-dom";
import WidgetCategoryTop from "../WidgetCategoryTop/WidgetCategoryTop";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { Divider } from "@material-ui/core";
import { useCounter } from "../../hooks/useCounter";

const useStyles = makeStyles(() => ({
  containerImageProduct: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #e6e6e6",
    width: "26rem",
    padding: "1rem",
    borderRadius: "1rem",
  },
  containerDetailProduct: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  alingValue: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerItems: {
    display: "flex",
    alignItems: "center",
  },
  divider: {
    margin: "1rem",
  },
  bagdeCategory: {
    background: "#F65D4E",
    padding: "10px",
    fontSize: " 0.8rem",
    borderRadius: "2rem",
    color: "#ffffff",
    margin: "10px 10px",
  },
}));

export default function ItemDetailContainer() {
  const classes = useStyles();
  const { itemId } = useParams();
  const { increment, decrement, value } = useCounter();

  const book = books.books.find((book) => book.id == itemId);

  return (
    <>
      <WidgetCategoryTop id={book.category[0].id} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        className={classes.containerDetailProduct}
      >
        <Grid xs={10} lg={5}>
          <div className={classes.containerImageProduct}>
            <img width="400" height="600" src={book.image} />
          </div>
        </Grid>
        <Grid xs={10} lg={5}>
          <div>
            <Typography variant="h4" component="h4">
              {book.title}
            </Typography>
            <div className={classes.containerItems}>
              <Typography variant="h5" component="h5" color="textSecondary">
                {book.author}
              </Typography>
              <span className={classes.bagdeCategory}>
                {book.category[0].name}
              </span>
            </div>

            <Typography variant="h6" component="p">
              {book.caption}
            </Typography>
            <br />

            <Typography variant="h4" component="h4" color="primary">
              ${book.price}
            </Typography>
          </div>
          <Divider variant="middle" className={classes.divider} />
          <div>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button disabled={value <= 1} onClick={decrement}>
                -
              </Button>
              <span className={classes.alingValue}>{value}</span>
              <Button disabled={value >= 5} onClick={increment}>
                +
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<ShoppingBasketOutlinedIcon />}
              >
                Comprar
              </Button>
            </ButtonGroup>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
