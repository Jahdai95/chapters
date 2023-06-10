import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import ItemList from "../ItemListCart/ItemListCart";

const useStyles = makeStyles({
  list: {
    width: 350,
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

export default function CartWidget() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ItemList greeting={"Esto es una prop"} />
    </div>
  );

  return (
    <>
      <ShoppingBasketOutlinedIcon onClick={toggleDrawer("right", true)} />
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </>
  );
}
