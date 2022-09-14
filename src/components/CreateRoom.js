import { useForm } from "react-hook-form";
import { useState } from "react";

import { Link } from "react-router-dom";

const CreateRoom = () => {

  const [hangmanWord, setHangmanWord] = useState('');
  const { register, handleSubmit } = useForm();
  const [roomId, setRoomId] = useState('');



  const onSubmit = (data, e) => {
    fetch('http://localhost:8070/games/' + data['hangman-word'], { method: 'POST' })
      .then(resp => resp.json())
      .then(result => {
        setRoomId(result.roomId);
        setHangmanWord(result.word);
      })
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <div>

      <span>Welcome to Hangman!</span>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label>
          Hangman Word:
          <input {...register("hangman-word")} style={{ marginLeft: 10 }} />
        </label>
        <input type="submit" value="Submit" style={{ marginLeft: 10 }} />
      </form>

      <span>Create room with word: {hangmanWord}, with id: {roomId}</span>
      <Link to={"/game/" + roomId}>Start Game</Link>

    </div>

  );

}

export default CreateRoom;