import React, { useState } from "react";
import "./App.css";

const diceFaces = [
  ["A1", "C1", "D1", "D2", "E2", "F3"],
  ["A2", "B2", "C2", "A3", "B1", "B3"],
  ["C3", "D3", "E3", "B4", "C4", "D4"],
  ["E1", "F2", "F2", "B6", "A5", "A5"],
  ["A4", "B5", "C6", "C5", "D6", "F6"],
  ["E4", "F4", "E5", "F5", "D5", "E6"],
  ["F1", "F1", "F1", "A6", "A6", "A6"],
];

function App() {
  const [diceResults, setDiceResults] = useState(Array(7).fill("?"));
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const results = diceFaces.map((faces) => {
        const randomIndex = Math.floor(Math.random() * faces.length);
        return faces[randomIndex];
      });
      setDiceResults(results);
      setIsRolling(false);
    }, 1500); // Simulate rolling animation for 1.5 seconds
  };

  return (
    <div className="App">
      <header>
        <h1>The Genius Square Dice Roller</h1>
      </header>
      <main>
        <div className="dice-container" aria-label="Dice results">
          {diceResults.map((result, index) => (
            <div
              key={index}
              className={`dice ${isRolling ? "rolling" : ""}`}
              aria-live="polite"
              role="status"
            >
              {isRolling ? <div className="spin">🎲</div> : result}
            </div>
          ))}
        </div>
        <button onClick={rollDice} disabled={isRolling}>
          {isRolling ? "Rolling..." : "Roll"}
        </button>
      </main>
    </div>
  );
}

export default App;
