import React, { useState, useRef } from "react";
import "./App.css";
import TripSection from "./Visualization/TripSection";
import styled, { css } from "styled-components";
import APIOptions from "./Options/APIOptions";
import { createStore } from "state-pool";

export const globalStore = createStore();
globalStore.setState("trajectoryData", null);
globalStore.setState("spatialRangeData", null);
globalStore.setState("spatioTemporalRangeData", null);
globalStore.setState("knnData", null);
globalStore.setState("selectedOption", 1);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="rowC">
          <TripSection />
          <APIOptions />
        </div>
      </header>
    </div>
  );
};

export default App;
