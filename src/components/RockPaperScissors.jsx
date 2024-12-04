import { useState } from "react";
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

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    <div className="container">
      <div className="input_fields">
        <div className="input_container">
          <label htmlFor="rock">
            <img src="./rock.png" alt="rock" width="100px" height="100px" />
            <p>rock</p>
          </label>
          <input
            type="radio"
            name="rock-paper-scissors"
            value="rock"
            id="rock"
            checked={choice === "rock"}
            onChange={handleChange}
          />
        </div>
        <div className="input_container">
          <label htmlFor="paper">
            <img src="./paper.png" alt="paper" width="100px" height="100px" />
            <p>paper</p>
          </label>
          <input
            type="radio"
            name="rock-paper-scissors"
            value="paper"
            id="paper"
            checked={choice === "paper"}
            onChange={handleChange}
          />
        </div>
        <div className="input_container">
          <label htmlFor="scissors">
            <img
              src="./scissors.png"
              alt="scissors"
              width="100px"
              height="100px"
            />
            <p>scissors</p>
          </label>
          <input
            type="radio"
            name="rock-paper-scissors"
            value="scissors"
            id="scissors"
            checked={choice === "scissors"}
            onChange={handleChange}
          />
        </div>
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
