import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import WidgetCategoryTop from "../WidgetCategoryTop/WidgetCategoryTop";
import ItemList from "../ItemList/ItemList";
import { books } from "../../mocks/books";

const useStyles = makeStyles(() => ({
  containerItemList: {
    marginBottom: "2rem",
  },
}));

export default function ItemListContainer() {
  const classes = useStyles();
  const { categoryId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryId !== undefined) {
      const filterBooks = books.books.filter((book) => {
        return book.category[0].id == categoryId;
      });
      setData(filterBooks);
    } else {
      setData(books.books);
    }
  }, [categoryId]);

  return (
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
