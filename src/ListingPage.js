import Items from "./Items";
import { getApiAction } from "./store/action";
import { connect, useDispatch } from "react-redux";
import { Box, TextField } from "@mui/material";
import { useEffect, useState, useRef } from "react";

const ListingPage = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = props;
  // console.log(data);
  const [searchVal, setSearchVal] = useState("");
  // const val = useRef('');

  // const value = () => {
  // console.log("Val_1", val);
  // if (val.current) {
  //   console.log(val.current.value, val);
  //   const vall = val.current.value;
  //   console.log(vall);
  // }
  // };

  useEffect(() => {
    dispatch(getApiAction());
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        {/* <input
          ref={val}
          id="standard-basic"
          label="Search..."
          sx={{ width: "300px" }}
          variant="standard"
          onChange={value}
        /> */}
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

        <TextField
          value={searchVal}
          id="outlined-basic"
          label="Search the Recipe..."
          sx={{
            width: "50%",
          }}
          variant="outlined"
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </Box>
      {isLoading ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Items data={data} val={searchVal} />
      )}
      {error}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    cartCount: state.cartItems.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApi: () => dispatch(getApiAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingPage);
