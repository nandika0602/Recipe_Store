import { AppBar, Box, Toolbar, Typography, Button, Badge } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getApiAction } from "../store/action";
import logo from "../assets/image.png";

function Dashboard(props) {
  const location = useLocation();

  const { getApi, cartCount } = props;

  return (
    <Box sx={{ width: "100%", position: "fixed", zIndex: "2", top: "0" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
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
            <img
              src={logo}
              style={{
                marginTop: "1vh",
                maxHeight: "80vh",
              }}
              alt=""
              height={"80px"}
              srcset=""
            />
          </Typography>
          <Box sx={{ height: "60px", marginRight: "25px" }}></Box>
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
            >
              <Button
                variant="outlined"
                sx={{ fontSize: "15px", fontWeight: "bold" }}
              >
                CART
              </Button>
            </Badge>
          </Link>
          {(location.pathname === "/list" ||
            location.pathname === "/cart" ||
            location.pathname === "/" ||
            location.pathname.includes("/dashboard/")) && (
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
            to="/"
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
