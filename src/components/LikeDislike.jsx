import React, { useState } from "react";
import "../App.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";



export const LikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <button onClick={() => setLikes(likes + 1)}><AiOutlineLike /> {likes}</button>
      <button onClick={() => setDislikes(dislikes + 1)}><AiOutlineDislike /> {dislikes}</button>
    </div>
  );
};