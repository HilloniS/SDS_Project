import React, {useState, useRef} from 'react';
import './App.css';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;

const App = () => {
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
        
          <Button onClick={handleClick}>
            Option 1
          </Button>

          <Button onClick={sayHello}>
            Option 2
          </Button>

          <Button onClick={sayHello}>
            Option 3
          </Button>

          <Button onClick={sayHello}>
            Option 4
          </Button>

          <Button onClick={sayHello}>
            Option 5
          </Button>

          {data.data.map(person => {
            return (
              <div key={person.id}>
                <h2>{person.email}</h2>
                <h2>{person.first_name}</h2>
                <h2>{person.last_name}</h2>
                <br />
              </div>
            );
          })}

      </header>
    </div>
  );
}

export default App;
