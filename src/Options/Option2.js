import React, { useState, useRef } from "react";
import { Button } from "../constants";
import { globalStore } from "../App";

const Option2 = () => {
  const [trajectoryData] = globalStore.useState("trajectoryData");
  const [selectedOption] = globalStore.useState("selectedOption");

  const callLoadTrajectoryData = async (filePath) => {
    filePath =
      "/Users/varsharavindra/Desktop/ASU/Coursework/SDSE-Phase-1/data/simulated_trajectories.json";
    // Calling loadTrajectory API
    console.log("Calling API");
    try {
      const response = await fetch("loadTrajectory?path=" + filePath, {
        method: "POST",
        mode: "no-cors",
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      console.log("Is it waiting?");
      globalStore.getState("trajectoryData").setValue(await response.json());
      globalStore.getState("selectedOption").setValue(2);
    } catch (err) {
      console.log("ERROR!!! ", err);
    }
  };

  return (
    <div>
      <Button onClick={callLoadTrajectoryData}>Option 2</Button>
    </div>
  );
};

export default Option2;
