import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const [show, setShow] = useState(false);
  const pathname = useLocation();
  const detail1 = pathname?.state?.detail;

  const toggleCard = (type) => {
    if (type === "ing") {
      setShow(type);
    }
    if (type === "ins") {
      setShow(type);
    }
  };
  if (detail1) detail = detail1;
  return (
    <>
      <div className="item_details">
        <Card
          sx={{
            height: "500px",
          }}
        >
          <CardMedia
            component="img"
            height="300px"
            width="100px"
            image={detail.image}
            alt="Paella dish"
            sx={{
              objectFit: "contain",
            }}
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
              RATINGn: {detail.rating}
            </Typography>
            <Link to="/list">
              <Button variant="contained">Go Back To Listing Page</Button>
            </Link>
          </CardContent>
        </Card>
        <div>
          <Card
            sx={{ padding: "20px", marginBottom: "30px" }}
            onClick={() => toggleCard("ing")}
          >
            <h1
              style={{
                cursor: "pointer",
              }}
            >
              {"ingredients".toUpperCase()}
            </h1>
            {detail?.ingredients?.map((ing, i) => {
              return (
                show === "ing" && (
                  <Typography key={i}>
                    {i + 1}. {ing}{" "}
                  </Typography>
                )
              );
            })}
          </Card>
          <Card
            sx={{ padding: "20px", cursor: "pointer" }}
            onClick={() => toggleCard("ins")}
          >
            <h1>{"instructions".toUpperCase()}</h1>
            {detail?.instructions?.map((e, i) => {
              return (
                show === "ins" && (
                  <Typography key={i}>
                    {i + 1}. {e}
                  </Typography>
                )
              );
            })}
          </Card>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};

export default connect(mapStateToProps)(ItemDetail);
