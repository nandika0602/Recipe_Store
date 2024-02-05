import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getApiAction } from "./store/action";
import Items from "./Items";
import { useRef, useState } from "react";

function Dashboard(props) {
  const location = useLocation();

  const [searchVal, setSearchVal] = useState("");

  const { getApi, data, isLoading, error, cartCount } = props;
  return (
    <Box sx={{ width: "100%", position: "fixed", zIndex: "2", top: "0" }}>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            color="black"
            aria-label="menu"
            sx={{ mr: 2, fontSize: "80px" }}
          >
            <MenuIcon sx={{ fontSize: "40px" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "black",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            RECIPE STORE
          </Typography>
          <Box sx={{ height: "60px", marginRight: "25px" }}>
            {/* <TextField
              ref={val}
              id="standard-basic"
              label="Search..."
              sx={{ width: "300px" }}
              variant="standard"
              onChange={value}
            /> */}
            {/* <TextField
              value={searchVal}
              id="standard-basic"
              label="Search..."
              sx={{ width: "300px" }}
              variant="standard"
              onChange={(e) => setSearchVal(e.target.value)}
            /> */}
          </Box>
          <Link
            to="/cart"
            sx={{
              textDecoration: "none",
              underline: "none",
              color: "inherit",
            }}
          >
            <Badge
              badgeContent={cartCount}
              color="error"
              sx={{ marginRight: "8px" }}
              // max={9}
            >
              <Button
                variant="outlined"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                CART
              </Button>
            </Badge>
            {/* 
            <IconButton aria-label="cart" >
                <ShoppingCartIcon   />
            </IconButton> */}
          </Link>
          {(location.pathname === "/list" || location.pathname === "/cart") && (
            <Link
              to="/list"
              sx={{
                textDecoration: "none",
                underline: "none",
                color: "inherit",
              }}
            >
              <Button
                variant="contained"
                sx={{ fontSize: "15px", fontWeight: "bold", margin: "4px" }}
                onClick={getApi}
              >
                GET LATEST RECIPES
              </Button>
            </Link>
          )}
          <Link
            to="/list"
            sx={{
              textDecoration: "none",
              underline: "none",
              color: "inherit",
            }}
          >
            <Button
              variant="contained"
              sx={{ fontSize: "15px", fontWeight: "bold", marginRight: "4px" }}
            >
              HOME
            </Button>
          </Link>
          <Link
            to="/login"
            sx={{
              textDecoration: "none",
              underline: "none",
              color: "inherit",
            }}
          >
            <Button
              variant="contained"
              sx={{ fontSize: "15px", fontWeight: "bold" }}
            >
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      {/* {isLoading ? (
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
        <Items data={data} val={searchVal}/>
      )}
      {error} */}
    </Box>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
