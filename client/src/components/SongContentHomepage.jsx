import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const SongContentHomepage = ({ song }) => {
  const { name, link } = song;

  const regex = /.*v=/gm;
  const embedLink = link.replace(regex, "");

  return (
    <div>
      <YoutubeEmbed embedId={embedLink} />
      <h1>{name}</h1>
    </div>
  );
};

export default SongContentHomepage;
