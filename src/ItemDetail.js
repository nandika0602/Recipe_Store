import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  return (
    <div className="item_details">
      <Card>
        <CardMedia
          component="img"
          height="300"
          width="100px"
          image={detail.image}
          alt="Paella dish"
        />
        <CardContent key={detail.id}>
          <Typography sx={{ fontWeight: "bold", color: "#005A9C" }}>
            NAME: {detail.name}
          </Typography>
          <Typography sx={{ fontWeight: "bold", color: "#4B9CD3" }}>
            CUISINE: {detail.cuisine}
          </Typography>
          <Typography sx={{ fontWeight: "bold", color: "#4B9CD3" }}>
            TAGS: {detail?.tags?.join(", ")}
          </Typography>
          <Typography
            sx={{ color: "green", fontSize: "20px", fontWeight: "bold" }}
          >
            RATING: {detail.rating}
          </Typography>
          <Link to="/list">
          <Button variant="contained">Go Back To Listing Page</Button>
          </Link>
        </CardContent>
      </Card>
      <Card sx={{ padding: "20px" }}>
        <h1>{"ingredients".toUpperCase()}</h1>
        {detail?.ingredients?.map((ing, i) => {
          return (
            <Typography key={i}>
              {i + 1}. {ing}
            </Typography>
          );
        })}
      </Card>
      <Card sx={{ padding: "20px" }}>
        <h1>{"instructions".toUpperCase()}</h1>
        {detail?.instructions?.map((e, i) => {
          return (
            <Typography key={i}>
              {i + 1}. {e}
            </Typography>
          );
        })}
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};

export default connect(mapStateToProps)(ItemDetail);

// const deleteUser = (id) => {
//     console.log(editKey, id, "delete");
//     if (editKey !== id) {
//       const deletedUser = list.filter((l) => l.id !== id);
//       console.log(deletedUser);
//       setFList(deletedUser);
//       setList(deletedUser);
//       // localStorage.
//       localStorage.setItem("list", JSON.stringify(deletedUser));
//       localStorage.setItem("fList", JSON.stringify(deletedUser));
//     } else {
//       console.log("You can't delete");
//       alert("You can't delete this user, as it is in edit mode");
//     }
//   };
