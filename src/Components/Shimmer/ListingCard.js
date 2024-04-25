import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const ListingCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "6vh",
      }}
    >
      {new Array(10).fill("card").map((card) => {
        return (
          <Card
            className="items"
            style={{
              border: "2px solid gray ",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              style={{
                minHeight: "18rem",
                backgroundImage:
                  "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
                animation: "shimmer 1.5s infinite",
              }}
              width="100px"
            />
            <CardContent>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#005A9C",
                  height: "20px",
                  backgroundImage:
                    "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
                  animation: "shimmer 1.5s infinite",
                  marginBottom: "5px",
                }}
              ></Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#4B9CD3",
                  height: "20px",
                  backgroundImage:
                    "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
                  animation: "shimmer 1.5s infinite",
                  marginBottom: "5px",
                }}
              ></Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#4B9CD3",
                  height: "20px",
                  backgroundImage:
                    "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
                  animation: "shimmer 1.5s infinite",
                  marginBottom: "5px",
                }}
              ></Typography>
              <Typography
                sx={{
                  color: "green",
                  fontSize: "20px",
                  fontWeight: "bold",
                  height: "20px",
                  backgroundImage:
                    "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
                  animation: "shimmer 1.5s infinite",
                  marginBottom: "5px",
                }}
              ></Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                bottom: "0px",
                height: "40px",
                backgroundImage:
                  "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
                animation: "shimmer 1.5s infinite",
              }}
            >
              ADD TO CART
            </Button>
          </Card>
        );
      })}
    </div>
  );
};

export default ListingCard;
