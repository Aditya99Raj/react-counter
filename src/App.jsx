import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(count + value);
  };
  return (
    <div className="container my-5">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="">Counter</h1>
          <div className=" mx-3 my-3">{count}</div>
          <button
            className="btn btn-primary mx-3 my-3"
            onClick={() => handleClick(1)}
          >
            Inc
          </button>
          <button
            className="btn btn-secondary mx-3 my-3"
            onClick={() => handleClick(-1)}
            disabled={count === 0}
          >
            Dec
          </button>
          <button
            className="btn btn-danger mx-3 my-3"
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
