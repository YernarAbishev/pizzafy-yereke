import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);  
  function decrement() {
    if (counter > 1) {
        setCounter(counter - 1);
    }
  }
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div className="counter">
        <button className="primary-button mr-5"><FontAwesomeIcon icon={faCartShopping} /></button>
        <button className={counter > 1 ? "counter__button" : "counter__button disabled" } onClick={decrement}>-</button>
        <span className="counter__number">{ counter }</span>
        <button className="counter__button" onClick={increment}>+</button>
    </div>
  )
}

export default Counter;
