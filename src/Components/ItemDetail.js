import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const ItemDetail = ({ detail }) => {
  const pathname = useLocation();
  const detail1 = pathname?.state?.detail;

  const img =
    "data:image/png;base64,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";

  if (detail1) detail = detail1;
  return (
    <div className="item_details">
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        style={{
          maxWidth: "20vw",
        }}
      >
        <CardMedia
          component="img"
          height="300px"
          width="100px"
          image={detail.image}
          alt=""
          sx={{
            objectFit: "contain",
          }}
        />
        <CardContent key={detail.id}>
          <Typography sx={{ fontWeight: "bold", color: "" }}>
            {detail.name?.toUpperCase()}
          </Typography>
          <Typography
            sx={{
              color: "green",
              fontSize: "20px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "20px",
                padding: "2px",
                borderRadius: "0%",
                marginRight: "2px",
              }}
              alt=""
              src={img}
            ></img>{" "}
            {detail.rating}
          </Typography>
          <Typography sx={{ fontWeight: "", color: "rgba(2, 6, 12, 0.6)" }}>
            {detail.cuisine}
          </Typography>
          <Typography sx={{ fontWeight: "", color: "rgba(2, 6, 12, 0.6)" }}>
            {detail?.tags?.join(", ")}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          style={{
            padding: "0",
            display: "flex",
          }}
        >
          <Link to="/list" style={{ flexBasis: "100%" }}>
            <Button fullWidth variant="contained">
              Go Back To Listing Page
            </Button>
          </Link>
        </CardActions>
      </Card>
      <div
        style={{
          padding: "20px",
        }}
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
            <Typography
              key={i}
              style={{
                lineHeight: 1.7,
              }}
            >
              {i + 1}. {ing}{" "}
            </Typography>
          );
        })}
      </div>
      <div
        style={{
          maxWidth: "500px",
          padding: "20px",
          textAlign: "justify",
        }}
      >
        <h1>{"instructions".toUpperCase()}</h1>
        <ul
          style={{
            paddingLeft: "20px",
          }}
        >
          {detail?.instructions?.map((e, i) => {
            return (
              <li
                key={i}
                style={{
                  listStyleType: "square",
                  lineHeight: 1.5,
                  fontSize: "18px",
                }}
              >
                {e}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};

export default connect(mapStateToProps)(ItemDetail);
