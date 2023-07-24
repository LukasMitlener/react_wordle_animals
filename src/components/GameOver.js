import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Správné slovo: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>Uhádl/a jsi na {currAttempt.attempt} pokusů</h3>
      )}
    </div>
  );
}

export default GameOver;
