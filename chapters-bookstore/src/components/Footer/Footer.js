import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  footer: {
    background: "#1d2330",
    color: "#cbcfd6",
    height: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography>©Chapters by Jahdai.</Typography>
    </div>
  );
}
