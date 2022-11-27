import React, {useState, useRef} from 'react';
import { Button } from '../constants';


const Option3 = () => {

  const [latMin, setLatMin] = useState('');
  const [latMax, setLatMax] = useState('');
  const [longMin, setLongMin] = useState('');
  const [longMax, setLongMax] = useState('');

  const changeLatMin = event => {
    setLatMin(event.target.value);

    console.log('value is:', event.target.value);
  };

  const changeLatMax = event => {
    setLatMax(event.target.value);

    console.log('value is:', event.target.value);
  };

  const changeLongMin = event => {
    setLongMin(event.target.value);

    console.log('value is:', event.target.value);
  };

  const changeLongMax = event => {
    setLongMax(event.target.value);

    console.log('value is:', event.target.value);
  };


  return (
    <div>
      <input
        type="integer"
        id="latmin"
        name="latmin"
        placeholder='Minimum Latitude'
        onChange={changeLatMin}
        value={latMin}
      />
      <input
        type="integer"
        id="latmax"
        name="latmax"
        placeholder='Maximum Latitude'
        onChange={changeLatMax}
        value={latMax}
      />
      <br></br>
      <input
        type="integer"
        id="longmin"
        name="longmin"
        placeholder='Minimum Longitude'
        onChange={changeLongMin}
        value={longMin}
      />
      <input
        type="integer"
        id="longmax"
        name="longmax"
        placeholder='Maximum Longitude'
        onChange={changeLongMax}
        value={longMax}
      />
      <Button >
        Option 3
      </Button>
  </div>
  );
}

export default Option3;
