import { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess]= useState("");

  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }

  const onSubmitGuess = () => {
    onGuess(parseInt(currentGuess));
    setCurrentGuess("");
  
/**
  * These lines are required to make the methods/functions declared on this     
  * class have the correct `this` object when they run.
*/
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.onSubmitGuess = this.onSubmitGuess.bind(this);

  // Since the values from an HTML input are strings by default,
  //  convert to a number for the returned guess value
  //  by passing in the string to the Number function.
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    // this.props.onGuess(Number(this.state.currentGuess));
    // this.setState({ currentGuess: "" });
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;