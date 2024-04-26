import { Fragment, useEffect, useState } from "react";
import { getDetailApiAction, addToCart, getApiAction } from "../store/action";
import { connect, useDispatch } from "react-redux";
import ItemCard from "./ItemCard";
import HOC from "./HOC.js";

const Items = ({ data, val }) => {
  const [searching, setSearching] = useState(false);
  const [data1, setData1] = useState([]);
  const NewComponent = HOC(ItemCard);

  useEffect(() => {
    setData1(data);
  }, [data]);

  useEffect(() => {
    let data11;
    if (val != "") {
      setSearching(true);
      data11 = data?.filter((list) => {
        return list.name.toLowerCase().includes(val.toLowerCase());
      });
      setData1(data11);
    } else {
      setSearching(false);
      data11 = data?.filter((list) => {
        return list.name.toLowerCase().includes(val.toLowerCase());
      });
      setData1(data11);
    }
  }, [val]);

  return (
    <div className="list-container" sx={{ position: "relative" }}>
      {data1?.map((list) => {
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
      })}
      {!data1?.length && searching && (
        <p
          style={{
            fontSize: "30px",
            fontWeight: "bolder",
            textAlign: "center",
            color: "#11728C",
          }}
        >
          {"TRY DIFFERENT SEARCH"}
        </p>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (id) => dispatch(getDetailApiAction(id)),
    addToCart: (list) => dispatch(addToCart(list)),
    getApi: () => dispatch(getApiAction()),
  };
};

const mapStateToProps = (state) => {
  return {
    allData: state.data,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
