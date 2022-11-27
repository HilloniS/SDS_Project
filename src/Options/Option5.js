import React, {useState, useRef} from 'react';
import { Button } from '../constants';


const Option5 = () => {

  const [trajectoryId, setTrajectoryId] = useState('');
  const [k, setLatK] = useState('');

  const changeTrajectoryId = event => {
    setTrajectoryId(event.target.value);
  };

  const changeK = event => {
    setLatK(event.target.value);
  };

  return (
    <div>
      <input
        id="trajectoryid"
        name="trajectoryid"
        placeholder='Trajectory Id'
        onChange={changeTrajectoryId}
        value={trajectoryId}
      />
      <input
        id="k"
        name="k"
        placeholder='Value of K'
        onChange={changeK}
        value={k}
      />
      <Button >
        Option 5
      </Button>
  </div>
  );
}

export default Option5;
