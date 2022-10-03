import React, { useState, useRef, useEffect } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);
  const [divArr, setDivArr] = useState([]);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);


  const handleCounter = () => {
    let val = (parseInt(inputRef.current.value));
    timer(val);
  };

  const timer = (val) => {
    setInterval(() => {
      setCount(count => count + val);
    }, 1000)
    return () => {
      clearInterval(timer);
    };
  }

  useEffect(() => {
    let val = (parseInt(inputRef1.current.value));
    if (count % val === 0){
      setDivArr(divArr => [...divArr, count]);
    }
  }, [count]);

  const removeItem = () => {
    let val = (parseInt(inputRef2.current.value));
    setDivArr(divArr => divArr.filter(function(ele) { 
      return ele !== val
    }));
  };

  return (
    <>
      <div>
        <div>
          <div className='text-center'>Brijesh</div>
        </div>
      </div>
      <h2>{count}</h2>
      <h2>{divArr.join(',')}</h2>
      <div className="col-3">
        <input type="text" ref={inputRef} className="form-control" id="formCounter" placeholder="Enter counter" />
      </div>
      <div className="col-3">
        <input type="text" ref={inputRef1} className="form-control" id="formCounter" placeholder="Enter divisible" />
        <button onClick={handleCounter}> click </button>
      </div>
      <div className="col-3">
        <input type="text" ref={inputRef2} className="form-control" id="formItem" placeholder="Remove Item from array" />\
        <button onClick={removeItem}> click </button>

      </div>
    </>
  );
}

export default Counter
