import { React, useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState(0);
    const [hover, setHover] = useState(false);
  
    //increase counter
    const increase = () => {
      setCounter(+counter + +message);
    };
  
    //decrease counter
    const decrease = () => {
      setCounter(Number(counter) - Number(message));
    };
  
    const messageChnage = (e) => {
      setMessage(e.target.value)
    };

    let className = 'counter';
    if (hover) {
      className += ' hover';
    }

    return (
        <>
          <div style={{ textAlign: "center" }} className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}>
            <h1>counter</h1>
            <span
              style={{
                color: counter >= 100 ? "green" : counter < 0 ? "red" : "black",
              }}
            >
              {counter}
            </span>
            <br></br>
            <br></br>
            <button onClick={increase}>+</button>
            <input type="number" onChange={messageChnage} value={message}></input>
            <button onClick={decrease}>-</button>
          </div>
        </>
      );
    }
    