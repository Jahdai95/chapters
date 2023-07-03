import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import WidgetCategoryTop from "../WidgetCategoryTop/WidgetCategoryTop";
import ItemList from "../ItemList/ItemList";
import { BooksContext } from "../../context/BooksContext";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  containerItemList: {
    marginBottom: "2rem",
  },
}));

export default function ItemListContainer() {
  const classes = useStyles();
  const { categoryId } = useParams();
  const { books } = useContext(BooksContext);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setData(books);
    setLoading(false);
  }, [books]);

  useEffect(() => {
    if (categoryId !== undefined) {
      const filterBooks = books.filter((item) => {
        return item.categoryId === categoryId;
      });
      setData(filterBooks);
    } else {
      setData(books);
    }
    setLoading(false);
  }, [categoryId, books]);

  return loading ? (
    <CircularProgress />
  ) : (
    <>
      <WidgetCategoryTop id={categoryId} />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        className={classes.containerItemList}
      >
        <Grid item xs={10}>
          <ItemList data={data} />
        </Grid>
      </Grid>
    </>
  );
}
