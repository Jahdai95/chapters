import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  containerItem: {
    display: "flex",
  },
  productImage: {
    margin: "0 30px 0 0",
  },
  productCaption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    cursor: "pointer",
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
  },
}));

export default function ItemList(props) {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      {props.data.map((item, index) => {
        return (
          <>
            <div key={item.id} className={classes.containerItem}>
              <div className={classes.productImage}>
                <img width="180" height="250" src={item.image} />
              </div>

              <div
                className={classes.productCaption}
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <Typography variant="h5" component="h2">
                  {item.title}
                </Typography>

                <Typography color="textSecondary">{item.author}</Typography>

                <Typography variant="body1" component="p">
                  {item.caption}
                </Typography>
                <Typography variant="h4" component="h4" color="primary">
                  ${item.price}
                </Typography>

                <Typography variant="body2" component="p">
                  <span className={classes.bagdeCategory}>
                    {item.category[0].name}
                  </span>
                </Typography>
              </div>
            </div>
            {index < props.data.length - 1 && (
              <Divider variant="middle" className={classes.divider} />
            )}
          </>
        );
      })}
    </>
  );
}
