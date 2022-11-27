import React, { useState, useRef } from "react";
import { Button } from "../constants";
import { globalStore } from "../App";

const Option3 = () => {
  const [spatialRangeData] = globalStore.useState("spatialRangeData");
  const [selectedOption] = globalStore.useState("selectedOption");

  const callSpatialRange = async () => {
    var latMin = document.getElementById("latmin"); //33.41415667570768;
    var lonMin = document.getElementById("lonmin"); //-111.92254858414022;
    var latMax = document.getElementById("latmax"); //33.414291502635706;
    var lonMax = document.getElementById("lonmax"); //-111.92518396810091;

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
      <input
        type="integer"
        id="latmin"
        name="latmin"
        placeholder="Minimum Latitude"
        onChange={changeLatMin}
        value={latMin}
      />
      <input
        type="integer"
        id="latmax"
        name="latmax"
        placeholder="Maximum Latitude"
        onChange={changeLatMax}
        value={latMax}
      />
      <br></br>
      <input
        type="integer"
        id="longmin"
        name="longmin"
        placeholder="Minimum Longitude"
        onChange={changeLongMin}
        value={longMin}
      />
      <input
        type="integer"
        id="longmax"
        name="longmax"
        placeholder="Maximum Longitude"
        onChange={changeLongMax}
        value={longMax}
      />
      <Button onClick={callSpatialRange}>Option 3</Button>
    </div>
  );
};

export default Option3;
