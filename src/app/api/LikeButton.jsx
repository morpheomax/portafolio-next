"use client";
import React from "react";
import { useState } from "react";

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "Unlike" : "Like"}
    </button>
  );
};

export default LikeButton;
