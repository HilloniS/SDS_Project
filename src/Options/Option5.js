import React from "react";
import { Button } from "../constants";
import { globalStore } from "../App";

const Option5 = () => {
  const [knnData] = globalStore.useState("knnData");
  const [selectedOption] = globalStore.useState("selectedOption");

  const getknnData = async (trajectoryId, neighbors) => {
    trajectoryId = 0;
    neighbors = 5;
    // Calling knnData API
    console.log("Calling knnData API");
    try {
      const response = await fetch(
        "knnTrajectory?trajectoryId=" +
          trajectoryId +
          "&neighbors=" +
          neighbors,
        {
          method: "POST",
          mode: "no-cors",
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      console.log("Is it waiting?");
      globalStore.getState("knnData").setValue(await response.json());
      globalStore.getState("selectedOption").setValue(5);
    } catch (err) {
      console.log("ERROR!!! ", err);
    }
  };

  return (
    <div>
      <Button onClick={getknnData}>Option 5</Button>
    </div>
  );
};

export default Option5;
