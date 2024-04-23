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
  const [showIns, setShowIns] = useState(false);
  const pathname = useLocation();
  const detail1 = pathname?.state?.detail;

  const toggleCard = (type) => {
    if (type === "ing") {
      setShow(!show);
    }
    if (type === "ins") {
      setShowIns(!showIns);
    }
  };
  if (detail1) detail = detail1;
  return (
    <>
      <div className="item_details" style={{maxHeight: "85vh",}}>
        <Card
          sx={{
            minHeight: "620px",
            // padding: "20px"
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"

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
        <div style={{overflowY: "scroll"}}>
          <Card
            sx={{ padding: "20px", marginBottom: "30px", minWidth: "50vw",  }}
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
                show === true && (
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
                showIns === true && (
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
