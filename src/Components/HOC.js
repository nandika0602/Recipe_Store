import { Badge } from "@mui/material";
import { Fragment } from "react";

const HOC = (Component) => {
  const NewComponent = (props) => {
    return (
      <Fragment>
        <Badge
          badgeContent={"NonVeg"}
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "red",
              paddingY: "15px",
              fontWeight: "bold",
            },
          }}
        >
          <Component {...props} />
        </Badge>
      </Fragment>
    );
  };
  return NewComponent;
};

export default HOC;
