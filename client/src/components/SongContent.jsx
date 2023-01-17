import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const SongContent = ({ song }) => {
  const { name, link, image, author } = song;

  const regex = /.*v=/gm;
  const embedLink = link.replace(regex, "");

  return (
    <div>
      <YoutubeEmbed embedId={embedLink} />
      <h1>{name}</h1>
      <a href={link}>Song Link</a>
      <h1>{image}</h1>
      <h1>{author}</h1>
    </div>
  );
};

export default SongContent;
