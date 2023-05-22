import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import CartWidget from "../CartWidget/CartWidget";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  categories: {
    display: "flex",
    width: "40rem",
    justifyContent: "right",
    "& > ul": {
      listStyle: "none",
    },
    "& > ul > li> a": {
      textDecoration: "none",
      padding: "1rem 1rem",
      color: "#000000",
      fontWeight: 600,
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuBookOutlinedIcon color="secondary" />
          </IconButton>
          <Typography variant="h6" noWrap>
            CHAPTERS
          </Typography>

          <div className={classes.grow} />
          <div className={classes.categories}>
            <ul>
              <li>
                <a href="#">STORE</a>
                <a href="#">GÉNERO</a>
                <a href="#">AUTORES</a>
              </li>
            </ul>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <CartWidget />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
