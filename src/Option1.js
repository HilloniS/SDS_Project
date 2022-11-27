import React, {useState, useRef} from 'react';
import { Button } from './constants';


const Option1 = () => {

  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Button onClick={handleClick}>
            Option 1
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Option1;
