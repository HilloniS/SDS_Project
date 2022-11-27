import React, { useState, useRef } from "react";
import { Button } from "../constants";
import { globalStore } from "../App";

const Option4 = () => {
  const [spatioTemporalRangeData] = globalStore.useState(
    "spatioTemporalRangeData"
  );
  const [selectedOption] = globalStore.useState("selectedOption");

  const getSpatioTemporalRangeData = async (
    timeMin,
    timeMax,
    latMin,
    lonMin,
    latMax,
    lonMax
  ) => {
    timeMin = 1664511371;
    timeMax = 1664512676;
    latMin = 33.41415667570768;
    lonMin = -111.92254858414022;
    latMax = 33.414291502635706;
    lonMax = -111.92518396810091;
    // Calling spatioTemporalRangeData API
    console.log("Calling spatioTemporalRangeData API");
    try {
      const response = await fetch(
        "spatioTemporalRange?timeMin=" +
          timeMin +
          "&timeMax=" +
          timeMax +
          "&latMin=" +
          latMin +
          "&lonMin=" +
          lonMin +
          "&latMax=" +
          latMax +
          "&lonMax=" +
          lonMax,
        {
          method: "POST",
          mode: "no-cors",
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      console.log("Is it waiting?");
      globalStore
        .getState("spatioTemporalRangeData")
        .setValue(await response.json());
      globalStore.getState("selectedOption").setValue(4);
    } catch (err) {
      console.log("ERROR!!! ", err);
    }
  };

  return (
    <div>
      <Button onClick={getSpatioTemporalRangeData}>Option 4</Button>
    </div>
  );
};

export default Option4;
