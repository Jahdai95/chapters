import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import figure from "../../assets/figure.png";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "4rem",
    color: "#1d2330",
    fontWeight: "300",
    textTransform: "uppercase",
  },
  figure: {
    height: "100%",
    width: "100%",
  },
  button: {
    background: "transparent",
    height: "3rem",
    width: "8rem",
    borderRadius: "4rem",
    border: "2px solid #3f51b5",
    fontSize: "1rem",
    color: "#3f51b5",
    cursor: "pointer",
    textTransform: "uppercase",
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid xs={5}>
        <div>
          <h3 className={classes.title}>
            Conoce tu próximo <br />
            libro favorito
          </h3>
          <button
            className={classes.button}
            onClick={() => navigate("/tienda")}
          >
            Shop
          </button>
        </div>
      </Grid>
      <Grid xs={5}>
        <div>
          <img src={figure} alt="figure" className={classes.figure} />
        </div>
      </Grid>
    </Grid>
  );
}
