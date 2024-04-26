import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useEffect, useState } from "react";
import FilterButton from "./Shimmer/FilterButton";
import FilterImg from "../assets/FilterImg.png";

const Filter = (props) => {
  const [val, setVal] = useState("");
  const { data, handleDataFromChild } = props;
  const arr = [];
  data.forEach((e) => {
    arr.push(...e.mealType);
  });
  const filterArray = [...new Set(arr)];

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    let filteredList;
    val !== "reset"
      ? (filteredList = data.filter((list) => list.mealType.includes(val)))
      : (filteredList = [...data]);
    handleDataFromChild(filteredList);
  }, [val]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseLine",
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={val}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {filterArray.length ? (
          filterArray.map((list) => {
            return (
              <div>
                <ToggleButton
                  style={{
                    backgroundColor: "green",
                    marginRight: "10px",
                    minWidth: "100px",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "20px",
                  }}
                  value={list}
                >
                  {list}
                </ToggleButton>
              </div>
            );
          })
        ) : (
          <FilterButton />
        )}

        <ToggleButton
          style={{
            backgroundColor: "red",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
          }}
          value={"reset"}
        >
          {"RESET"}
        </ToggleButton>
        <img
          style={{
            maxHeight: "60px",
          }}
          src={FilterImg}
          alt="Filter"
        ></img>
      </ToggleButtonGroup>
    </div>
  );
};

export default Filter;
