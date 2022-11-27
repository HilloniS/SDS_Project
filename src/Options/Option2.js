import React, {useState, useRef} from 'react';
import { Button } from '../constants';


const Option2 = () => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleClick1 = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    setFileName(fileObj.name);
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