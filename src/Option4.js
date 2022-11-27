import React, {useState, useRef} from 'react';
import { Button } from './constants';


const Option1 = () => {

  const inputRef = useRef(null);

  const handleClick1 = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    let value = URL.createObjectURL(event.target.files[0]);
    console.log('value :- ', value);
    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };



  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  function sayHello() {
    alert('Data Loading..');
  }

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
        <div>
          <input
          style={{display: 'none'}}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
        <button onClick={handleClick1}>Open file upload box</button>
        </div>
      </header>
    </div>
  );
}

export default Option1;
