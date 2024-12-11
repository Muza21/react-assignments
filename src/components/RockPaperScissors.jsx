import { useState } from "react";
import React from "react";
import UserInput from "./UserInput";
import "./style.css";

function RockPaperScissors() {
  const [choice, setChoice] = useState(false);
  const [winner, setWinner] = useState("");
  const [computerWinCount, setComputerWinCount] = useState(0);
  const [userWinCount, setUserWinCount] = useState(0);
  const [drawCount, setDrawCount] = useState(0);
  const compChoice = ["rock", "paper", "scissors"];

  const play = () => {
    const index = Math.floor(Math.random() * 3);
    if (!choice) {
      return;
    }

    if (compChoice[index] === choice) {
      setWinner("Draw");
      setDrawCount((prevValue) => prevValue + 1);
    } else if (
      (compChoice[index] === "rock" && choice === "paper") ||
      (compChoice[index] === "paper" && choice === "scissors") ||
      (compChoice[index] === "scissors" && choice === "rock")
    ) {
      setWinner("User");
      setUserWinCount((prevValue) => prevValue + 1);
    } else {
      setWinner("Computer");
      setComputerWinCount((prevValue) => prevValue + 1);
    }
  };

  const reset = () => {
    setChoice("");
    setWinner("");
    setDrawCount(0);
    setUserWinCount(0);
    setComputerWinCount(0);
  };

  const handleChange = (val) => {
    setChoice(val);
  };

  return (
    <div className="container">
      <div className="input_fields">
        {compChoice.map((c) => {
          return (
            <React.Fragment key={c}>
              <UserInput
                id={c}
                choice={choice}
                handleChange={() => handleChange(c)}
                title={c}
              />
            </React.Fragment>
          );
        })}
      </div>
      <button className="button" onClick={play}>
        Play
      </button>
      <button className="button" onClick={reset}>
        Reset
      </button>
      <h3>Winner: {winner ?? ""}</h3>
      <span>Computer: {computerWinCount}</span>
      <span>User: {userWinCount}</span>
      <span>Draw: {drawCount}</span>
    </div>
  );
}

export default RockPaperScissors;
