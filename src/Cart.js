import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { removeCart } from "./store/action";
import { connect } from "react-redux";

const Cart = ({ cart, removeFromCart }) => {
  // console.log(cart);
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
      {/* <Link to="/">
        <Button variant="contained">Go Back To Listing Page</Button>
      </Link> */}
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
                  // padding: "20px",
                  // paddingY: "40px",
                }}
              >
                <Link to={`/dashboard/${item.id}`}>
                  {/* <CardMedia
                    component="img"
                    height="300"
                    width="100px"
                    // image={list.image}
                    alt="Paella dish"
                    // onClick={() => getDetail(list.id)}
                  /> */}
                </Link>
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
                    {/* {item.id} */}
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
                    // marginLeft: "25%",
                    // marginTop: "15px",
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
        {/* // {cart?.map((item) => {
        //   return (
        //     <Card
        //       key={item.id}
        //       sx={{
        //         height: '340px',
        //         marginLeft: "20px",
        //         width: '15%',
        //         marginBottom: '30px',
        //         position: 'relative '
        //       }}
        //     >
        //       <CardContent>
        //         <CardMedia
        //           component="img"
        //           height="200px"
        //           width="20px"
        //           image={item?.image}
        //         ></CardMedia>
        //         <Typography sx={{
        //           padding: '8px',
        //           fontWeight: 'bold',
        //           color: '#00538C'
        //         }}>{item?.name.toUpperCase()}</Typography>
        //         <Button
        //           color="error"
        //           variant="contained"
        //           onClick={() => removeFromCart(item?.id)}
        //           sx={{
        //             marginLeft: '50px',
        //             marginTop: '5px',
        //             position: 'absolute',
        //             top: '82%'
        //           }}
        //         >
        //           REMOVE
        //         </Button>
        //       </CardContent>
        //     </Card>
        //   );
        // })} */}
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
