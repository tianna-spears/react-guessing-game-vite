import React, { useState }  from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 * Returns a random integer number from 1-100 inclusive
 */

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const MAX_ATTEMPTS = 5;

const NumberGuessingGame = () => {
  const [numberToGuess, setNumberToGuess] = useState(0);
  const [numberOfGuesses, setNumberOfGuesses] = React.useState(0);
  const [latestGuess, setLatestGuess] = React.useState(0);

  handleGuess = (guess) => {
    setLatestGuess({
      latestGuess: guess,
      numberOfGuesses: numberOfGuesses + 1,
    });
  }

  handleReset = () => {
      setNumberToGuess(getRandomNumber());
      setNumberOfGuesses(0);
      setLatestGuess(null),
    };

  const isCorrectGuess = latestGuess === numberToGuess;

  const isGameOver =
    isCorrectGuess || state.numberOfGuesses === MAX_ATTEMPTS;

  /**
   * These lines are required to make the methods/functions declared on this     *  class have the correct `this` object when they run.
   */
    this.handleGuess = this.handleGuess.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  return (
    <div>
      <h2>Im thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={state.latestGuess}
          numberToGuess={state.numberToGuess}
          numberOfGuesses={state.numberOfGuesses}
        />
      )}
    </div>
  );

export default NumberGuessingGame;