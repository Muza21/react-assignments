import { useState, useRef, useEffect } from "react";
import "./style.css";

function RockPaperScissors() {
  const [rock, setRock] = useState(false);
  const [paper, setPaper] = useState(false);
  const [scissors, setScissors] = useState(false);
  const refRock = useRef(null);
  const refPaper = useRef(null);
  const refScissors = useRef(null);

  const play = () => {
    const compChoice = Math.random();
    if (compChoice < 0.33) {
      setRock(true);
      setPaper(false);
      setScissors(false);
    } else if (compChoice > 0.33 && compChoice < 0.66) {
      setRock(false);
      setPaper(true);
      setScissors(false);
    } else {
      setRock(false);
      setPaper(false);
      setScissors(true);
    }
    console.log(rock, paper, scissors, compChoice);
  };

  return (
    <>
      <div className="input_fields">
        <div className="input_container">
          <label htmlFor="rock">
            <img src="./rock.png" alt="rock" width="100px" height="100px" />
            <p>rock</p>
          </label>
          <input
            type="radio"
            ref={refRock}
            name="rock-paper-scissors"
            value="rock"
            id="rock"
          />
        </div>
        <div className="input_container">
          <label htmlFor="paper">
            <img src="./paper.png" alt="paper" width="100px" height="100px" />
            <p>paper</p>
          </label>
          <input
            type="radio"
            ref={refPaper}
            name="rock-paper-scissors"
            value="paper"
            id="paper"
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
            ref={refScissors}
            name="rock-paper-scissors"
            value="scissors"
            id="scissors"
          />
        </div>
      </div>
      <button className="button" onClick={play}>
        Play
      </button>
    </>
  );
}

export default RockPaperScissors;
