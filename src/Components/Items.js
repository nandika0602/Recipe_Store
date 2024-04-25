import { Fragment } from "react";
import { getDetailApiAction, addToCart } from "../store/action";
import { connect } from "react-redux";
import ItemCard from "./ItemCard";
import HOC from "./HOC.js";
import ListingCard from "./Shimmer/ListingCard.js";

const Items = ({ data, getDetail, addToCart, val }) => {
  //HOC
  const NewComponent = HOC(ItemCard);

  const data1 = data?.filter((list) => {
    return list.name.toLowerCase().includes(val.toLowerCase());
  });

  return (
    <div className="list-container" sx={{ position: "relative" }}>
      {
        // data1.length
        // ?
        data1?.map((list) => {
          return (
            <Fragment key={list.id}>
              {list.name.toLowerCase().includes("chicken") ||
              list.name.toLowerCase().includes("beef") ? (
                <NewComponent list={list} />
              ) : (
                <ItemCard list={list} />
              )}
            </Fragment>
          );
        })
        // :  <ListingCard />
        // "hii"
      }
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
