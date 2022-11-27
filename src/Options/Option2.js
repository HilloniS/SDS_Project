import React, {useState, useRef} from 'react';
import { Button } from '../constants';


const Option2 = () => {

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


  return (
    <div>
      <input
      style={{display: 'none'}}
      ref={inputRef}
      type="file"
      onChange={handleFileChange}
      />
    <Button onClick={handleClick1}>
      Option 2
    </Button>
    </div>
  );
}

export default Option2;
