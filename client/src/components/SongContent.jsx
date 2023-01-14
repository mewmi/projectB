import React from "react";

const SongContent = ({ song }) => {
  const { name, link, image, author } = song;

  return (
    <div>
      <h1>{name}</h1>
      <a href={link}>Song Link</a>
      <h1>{image}</h1>
      <h1>{author}</h1>
    </div>
  );
};

export default SongContent;
