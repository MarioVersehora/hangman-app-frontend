import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useState } from "react";

import { useParams } from 'react-router-dom';
import axios from "axios";

const GuessWord = () => {

  const { register, handleSubmit } = useForm();
  const params = useParams()
  const [tryResponse, setTryResponse] = useState(null);

  const onSubmit = (data, e) => {
    console.log(data['guess-word']);
    console.log(encodeURIComponent(params.roomId));


    axios.post('http://localhost:8070/games/' + 'tqqb' + "/" + data['guess-word'])
      .then(resp => resp.json())
      .then(result => {
        setTryResponse(result);
      })

    // fetch('http://localhost:8070/games/0mgX/abc', {
    //   //fetch('http://localhost:8070/games/' + params.roomId + "/" + data['guess-word'], {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // })

  };

  const onError = (errors, e) => console.log(errors, e);


  return (

    <>
      <span>This is the game room!</span>

      <Link to="/" > Go back</Link>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>
          Guess Letter:
          <input {...register("guess-word")} style={{ marginLeft: 10 }} />
        </label>
        <input type="submit" value="Submit" style={{ marginLeft: 10 }} />
      </form>

      <span>You tried the following letters: </span>

      {tryResponse !== null &&
        <span>{tryResponse.lettersTried}</span>
      }




    </>

  );

}

export default GuessWord;