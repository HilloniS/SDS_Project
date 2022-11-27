import React, {useState, useRef} from 'react';
import { Button } from '../constants';


const Option4 = () => {

  const [latMin, setLatMin] = useState('');
  const [latMax, setLatMax] = useState('');
  const [longMin, setLongMin] = useState('');
  const [longMax, setLongMax] = useState('');
  const [timestampMin, setTimestampMin] = useState('');
  const [timestampMax, setTimestampMax] = useState('');

  const changeLatMin = event => {
    setLatMin(event.target.value);
  };

  const changeLatMax = event => {
    setLatMax(event.target.value);
  };

  const changeLongMin = event => {
    setLongMin(event.target.value);
  };

  const changeLongMax = event => {
    setLongMax(event.target.value);
  };

  const changeTimestampMin = event => {
    setTimestampMin(event.target.value);
  };

  const changeTimestampMax = event => {
    setTimestampMax(event.target.value);
  };


  return (
    <div>
      <input
        id="latmin"
        name="latmin"
        placeholder='Minimum Latitude'
        onChange={changeLatMin}
        value={latMin}
      />
      <input
        id="latmax"
        name="latmax"
        placeholder='Maximum Latitude'
        onChange={changeLatMax}
        value={latMax}
      />
      <br></br>
      <input
        id="longmin"
        name="longmin"
        placeholder='Minimum Longitude'
        onChange={changeLongMin}
        value={longMin}
      />
      <input
        id="longmax"
        name="longmax"
        placeholder='Maximum Longitude'
        onChange={changeLongMax}
        value={longMax}
      />
      <br></br>
      <input
        id="timestampmin"
        name="timestampmin"
        placeholder='Minimum Timestamp'
        onChange={changeTimestampMin}
        value={timestampMin}
      />
      <input
        id="timestampmax"
        name="timestampmax"
        placeholder='Maximum Timestamp'
        onChange={changeTimestampMax}
        value={timestampMax}
      />    
      <Button >
        Option 4
      </Button>
  </div>
  );
}

export default Option4;
