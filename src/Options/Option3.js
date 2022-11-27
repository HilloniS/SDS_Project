import React, { useState, useRef } from "react";
import { Button } from "../constants";
import { globalStore } from "../App";

const Option3 = () => {
  const [spatialRangeData] = globalStore.useState("spatialRangeData");
  const [selectedOption] = globalStore.useState("selectedOption");

  const callSpatialRange = async (latMin, lonMin, latMax, lonMax) => {
    latMin = 33.41415667570768;
    lonMin = -111.92254858414022;
    latMax = 33.414291502635706;
    lonMax = -111.92518396810091;
    // Calling spatialRange API
    console.log("Calling spatialRange API");
    try {
      const response = await fetch(
        "spatialRange?latMin=" +
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
      globalStore.getState("spatialRangeData").setValue(await response.json());
      globalStore.getState("selectedOption").setValue(3);
    } catch (err) {
      console.log("ERROR!!! ", err);
    }
  };

  return (
    <div>
      <Button onClick={callSpatialRange}>Option 3</Button>
    </div>
  );
};

export default Option3;
