import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { removeCart } from "../store/action";
import { connect } from "react-redux";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bolder",
          textAlign: "center",
          padding: "20px",
          color: "gray",
          marginTop: "100px",
        }}
      >
        {cart.length ? "CART ITEMS" : "NO ITEMS ADDED TO CART"}
      </Typography>
      <Stack direction={"row"} className="cart_card">
        {cart.length ? (
          cart?.map((item) => {
            return (
              <Card
                key={item.id}
                sx={{
                  height: "340px",
                  marginLeft: "20px",
                  width: "15%",
                  marginBottom: "30px",
                  position: "relative ",
                }}
              >
                <Link to={`/dashboard/${item.id}`}></Link>
                <CardContent>
                  <Link
                    to={`/dashboard/${item.id}`}
                    state={{
                      detail: item,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200px"
                      width="20px"
                      image={item?.image}
                    ></CardMedia>
                  </Link>
                  <Typography
                    sx={{
                      padding: "8px",
                      fontWeight: "bold",
                      color: "#00538C",
                    }}
                  >
                    {item?.name.toUpperCase()}
                  </Typography>
                </CardContent>
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => removeFromCart(item?.id)}
                  sx={{
                    position: "absolute",
                    top: "89%",
                    width: "100%",
                  }}
                >
                  REMOVE
                </Button>
              </Card>
            );
          })
        ) : (
          <Typography
            sx={{
              padding: "8px",
              fontWeight: "bold",
              color: "#00538C",
            }}
          ></Typography>
        )}
      </Stack>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
