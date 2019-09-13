import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [screen, setScreen] = useState(0);

  let clearScreen = () => {
    setScreen(0);
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
    let arr = Array.from(String(screen), Number);
    // let newNum = Array.from(String(screen));
    if (screen === 0) {
      setScreen(7);
      console.log("yaaaaa", screen);
    } else {
      console.log("arrthing", arr, newNum);
      newNum.push(7);
      console.log("arr", arr);
      setScreen(newNum.join(...arr));
    }
  };

  let eight = () => {
    setScreen(8);
  };

  let nine = () => {
    setScreen(9);
  };

  let four = () => {
    setScreen(4);
  };

  let five = () => {
    setScreen(5);
  };

  let six = () => {
    setScreen(6);
  };

  let one = () => {
    setScreen(1);
  };

  let two = () => {
    setScreen(2);
  };

  let three = () => {
    setScreen(3);
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
    setScreen(0);
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
          <h2 onClick={seven}>1</h2>
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
