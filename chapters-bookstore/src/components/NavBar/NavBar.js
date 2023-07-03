import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, useNavigate } from "react-router-dom";
import { categories } from "../../mocks/categories";
import { CartContext } from "../../context/CartContext";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  brand: {
    cursor: "pointer",
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
      textTransform: "uppercase",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { totalItems } = useContext(CartContext);
  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => navigate("/")}
          >
            <MenuBookOutlinedIcon color="primary" />
          </IconButton>
          <Typography
            className={classes.brand}
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
          >
            CHAPTERS
          </Typography>

          <div className={classes.grow} />
          <div className={classes.categories}>
            <ul>
              <li>
                <NavLink to={"/tienda"}>Tienda</NavLink>
                {categories.categories.map((item) => {
                  return (
                    <NavLink key={item.id} to={`${item.route}/${item.id}`}>
                      {item.name}
                    </NavLink>
                  );
                })}
              </li>
            </ul>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={totalItems} color="primary">
                <CartWidget />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
