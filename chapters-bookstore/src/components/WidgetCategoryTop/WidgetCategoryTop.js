import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { categories } from "../../mocks/categories";

const useStyles = makeStyles(() => ({
  containerCategory: {
    padding: "2rem 2rem",
    height: "6rem",
    background: "#f0f0f0",
    marginBottom: "2rem",
  },
}));

export default function WidgetCategoryTop(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const categoryName = categories.categories.find(
    (element) => element.id == props.id
  );

  return (
    <>
      <Grid
        className={classes.containerCategory}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item xs={12}>
          <IconButton
            color="primary"
            aria-label="go back"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h4">
            {categoryName === undefined ? "Tienda" : categoryName.name}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
