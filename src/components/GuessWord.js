import React from "react";

import { Link } from "react-router-dom";



const GuessWord = () => {

  const getLetters = () => {
    fetch('')
  }

  return (

    <>
      <span>This is the game room!</span>

      <Link to="/" > Go back</Link>

      <span>You tried the following letters: </span>


    </>

  );


}

export default GuessWord;