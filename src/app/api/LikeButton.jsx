"use client";

import React, { useState } from "react";

const LikeButton = ({ id }) => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`${
        liked
          ? "text-red-500 hover:text-red-600"
          : "text-gray-500 hover:text-red-600"
      } px-3 py-1 rounded-md transition-colors focus:outline-none`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
};

export default LikeButton;
