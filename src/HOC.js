import { Badge } from "@mui/material";
import { Fragment } from "react";

const HOC = (Component) => {
  const NewComponent = (props) => {
    return (
      <Fragment
        // style={{
        //   color: "white",
        // }}
      >
        <Badge
          badgeContent={"NonVeg"}
          color="error"
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              backgroundColor: "red",
              paddingY: "15px",
              fontWeight: "bold",
              // paddingX: 'px',
              // borderRadius: '10px'
            },
          }}
        >
          <Component
            {...props}
            style={
              {
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          />
        </Badge>
        {/* <div
          style={{
            height: "30px",
            width: "91%",
            backgroundColor: "red",
            display: "inline-block",
            textAlign: "center",
            fontWeight: "bold",
            paddingY: "5px",
          }}
        >
          <span>NON VEG</span>
        </div> */}
      </Fragment>
    );
  };
  return NewComponent;
};

export default HOC;
