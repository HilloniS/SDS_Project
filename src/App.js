import React, { useState, useRef } from "react";
import "./App.css";
import { TripSection } from "./Visualization/TripSection";
import styled, { css } from "styled-components";
import APIOptions from "./Options/APIOptions";

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
