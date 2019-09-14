import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // set useState to an array
  // push and pop digits from the array
  const [screen, setScreen] = useState([0]);

  let clearScreen = () => {
    setScreen([0]);
  };

  let deleteChar = screen => {
    let screenArr = screen.split("");
    let newArr = [];
    for (let i = 0; i < screenArr.length - 1; i++) {
      newArr.push(screenArr[i]);
    }
    let newNum = newArr.join();
    setScreen(newNum);
  };

  let seven = () => {
    if (screen[0] === 0) {
      setScreen([7]);
      console.log("yaaaaa", screen);
    } else {
      setScreen([...screen, 7]);
    }
  };

  let eight = () => {
    if (screen[0] === 0) {
      setScreen([8]);
    } else {
      setScreen([...screen, 8]);
    }
  };

  let nine = () => {
    if (screen[0] === 0) {
      setScreen([9]);
    } else {
      setScreen([...screen, 9]);
    }
  };

  let four = () => {
    if (screen[0] === 0) {
      setScreen([4]);
    } else {
      setScreen([...screen, 4]);
    }
  };

  let five = () => {
    if (screen[0] === 0) {
      setScreen([5]);
    } else {
      setScreen([...screen, 5]);
    }
  };

  let six = () => {
    if (screen[0] === 0) {
      setScreen([6]);
    } else {
      setScreen([...screen, 6]);
    }
  };

  let one = () => {
    if (screen[0] === 0) {
      setScreen([1]);
    } else {
      setScreen([...screen, 1]);
    }
  };

  let two = () => {
    if (screen[0] === 0) {
      setScreen([2]);
    } else {
      setScreen([...screen, 2]);
    }
  };

  let three = () => {
    if (screen[0] === 0) {
      setScreen([3]);
    } else {
      setScreen([...screen, 3]);
    }
  };

  let negative = screen => {
    let num = screen;
    if (num > 0) {
      setScreen(-num);
    } else if (num < 0) {
      setScreen(Math.abs(num));
    }
  };

  let zero = () => {
    if (screen[0] === 0) {
      setScreen([0]);
    } else {
      setScreen([...screen, 0]);
    }
  };

  let point = () => {
    let screenArr = screen.split("");
    let newArr = [];
    for (let i = 0; i < screenArr.length - 1; i++) {
      newArr.push(screenArr[i]);
    }
    let newNum = newArr.join();
    setScreen(newNum);
  };

  return (
    <div className="App">
      <p>ans ansScreenFunction</p>
      <h1>{screen}</h1>
      <section>
        <div>
          <h2 onClick={clearScreen}>Clear</h2>
          <h2 onClick={deleteChar}>x</h2>
        </div>
        <div>
          <h2 onClick={seven}>7</h2>
          <h2 onClick={eight}>8</h2>
          <h2 onClick={nine}>9</h2>
          <h2 onClick={four}>4</h2>
          <h2 onClick={five}>5</h2>
          <h2 onClick={six}>6</h2>
          <h2 onClick={one}>1</h2>
          <h2 onClick={eight}>2</h2>
          <h2 onClick={nine}>3</h2>
          <h2 onClick={negative}>+/-</h2>
          <h2 onClick={zero}>0</h2>
          <h2 onClick={point}>.</h2>
        </div>
      </section>
      <div>
        <h2>/</h2>
        <h2>X</h2>
        <h2>-</h2>
        <h2>+</h2>
        <h2>=</h2>
      </div>
    </div>
  );
}

export default App;
