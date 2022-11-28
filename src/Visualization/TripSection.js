import React from "react";
import { globalStore } from "../App";
import RenderDeck from "./RenderDeck";

const TripSection = () => {
  const [selectedOption] = globalStore.useState("selectedOption");
  const [trajectoryData] = globalStore.useState("trajectoryData");
  const [spatialRangeData] = globalStore.useState("spatialRangeData");
  const [spatioTemporalRangeData] = globalStore.useState(
    "spatioTemporalRangeData"
  );
  const [knnData] = globalStore.useState("knnData");
  switch (selectedOption) {
    case 1:
      return (
        <div className="tripsViz">
          <RenderDeck />
        </div>
      );
    case 2:
      console.log("Inside trip section trajectoryData: ", trajectoryData);
      return <div className="tripsViz">trajectoryData</div>;
    case 3:
      console.log("Inside trip section spatialRangeData: ", spatialRangeData);
      return <div className="tripsViz">spatialRangeData</div>;
    case 4:
      console.log(
        "Inside trip section spatioTemporalRangeData: ",
        spatioTemporalRangeData
      );
      return <div className="tripsViz">spatioTemporalRangeData</div>;
    case 5:
      console.log("Inside trip section knnData: ", knnData);
      return <div className="tripsViz">knnData</div>;
    default:
      return <div className="tripsViz">Hello World!</div>;
  }
};

export default TripSection;
