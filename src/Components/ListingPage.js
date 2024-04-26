import Items from "./Items";
import { getApiAction } from "../store/action";
import { connect, useDispatch } from "react-redux";
import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import ListingCard from "./Shimmer/ListingCard.js";

const ListingPage = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = props;
  const [searchVal, setSearchVal] = useState("");
  const [filteredList, setFilteredList] = useState(data);

  useEffect(() => {
    dispatch(getApiAction());
  }, []);

  useEffect(() => {
    setFilteredList(data);
  }, [data]);

  const handleDataFromChild = (data) => {
    setFilteredList([...data]);
  };

  return (
    <>
      <Box
        sx={{
          height: "60px",
          display: "flex",
          marginTop: "14vh",
          justifyContent: "space-evenly",
          marginBottom: "5vh",
        }}
      >
        <TextField
          value={searchVal}
          id="outlined-basic"
          label="Search the Recipe..."
          sx={{
            marginTop: "3vh",
            width: "50%",
          }}
          variant="outlined"
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </Box>

      <Filter data={data} handleDataFromChild={handleDataFromChild} />
      {isLoading ? (
        <ListingCard />
      ) : (
        <Items data={filteredList} val={searchVal} />
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
