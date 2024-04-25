import React from "react";

const FilterButton = () => {
  return (
    <div>
      {new Array(9).fill("hello").map((button) => {
        return (
          <>
            <button
              style={{
                backgroundColor: "gray",
                marginRight: "10px",
                minWidth: "100px",
                color: "white",
                fontWeight: "bold",
                borderRadius: "20px",
                minHeight: "6vh",
                backgroundImage:
                  "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)",
                animation: "shimmer 1.5s infinite",
                border: "2px solid white",
              }}
            ></button>
          </>
        );
      })}
    </div>
  );
};

export default FilterButton;
