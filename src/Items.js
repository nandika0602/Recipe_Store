import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { getDetailApiAction, addToCart } from "./store/action";
import { connect } from "react-redux";
import ItemCard from "./ItemCard";
import HOC from "./HOC";

const Items = ({ data, getDetail, addToCart, val }) => {
  //HOC
  const NewComponent = HOC(ItemCard);

  const data1 = data.filter((list) => {
    // console.log(list.ingredients.join(), typeof(list.ingredients.join()), val);
    return list.name.toLowerCase().includes(val.toLowerCase());
  });

  return (
    <div className="list-container" sx={{ position: "relative" }}>
      {data1?.map((list) => {
        return (
          // <Fragment key={list.id}>
          //   <Card className="items">
          //     <Link to={`/dashboard/${list.id}`}>
          //       <CardMedia
          //         component="img"
          //         height="300"
          //         width="100px"
          //         image={list.image}
          //         alt="Paella dish"
          //         onClick={() => getDetail(list.id)}
          //       />
          //     </Link>
          //     <CardContent>
          //       <Typography sx={{ fontWeight: "bold", color: "#005A9C" }}>
          //         {list.name.toUpperCase()}
          //       </Typography>
          //       <Typography sx={{ fontWeight: "bold", color: "#4B9CD3" }}>
          //         CUISINE: {list.cuisine}
          //       </Typography>
          //       <Typography sx={{ fontWeight: "bold", color: "#4B9CD3" }}>
          //         Tags: {list.tags.join(", ")}{" "}
          //       </Typography>
          //       <Typography
          //         sx={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
          //       >
          //         Rating: {list.rating}{" "}
          //       </Typography>
          //     </CardContent>
          //     <Button
          //       variant="contained"
          //       sx={{ fontSize: "15px", fontWeight: "bold", bottom: "0px" }}
          //       onClick={() => addToCart(list)}
          //     >
          //       ADD TO CART
          //     </Button>
          //   </Card>
          // </Fragment>
          <Fragment key={list.id}>
            {/* {list.id % 2 ? ( */}
            {list.name.toLowerCase().includes("chicken") ||
            list.name.toLowerCase().includes("beef") ? (
              <NewComponent list={list} />
            ) : (
              <ItemCard list={list} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (id) => dispatch(getDetailApiAction(id)),
    addToCart: (list) => dispatch(addToCart(list)),
  };
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
