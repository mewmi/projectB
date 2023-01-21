import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const SongContent = ({ song }) => {
  const { name, link, author } = song;

  const regex = /.*v=/gm;
  const embedLink = link.replace(regex, "");

  return (
    <div>
      <YoutubeEmbed embedId={embedLink} />
      <h1
        style={{
          fontSize: "20px",
          margin: "10px",
          fontFamily: "Aldrich",
        }}
      >
        Song name: {name}
      </h1>
      <a
        href={link}
        style={{
          fontSize: "20px",
          margin: "10px",
          fontFamily: "Aldrich",
          color: "black",
          textDecoration: "none",
        }}
      >
        Song Link
      </a>
      <h1
        style={{
          fontSize: "20px",
          margin: "10px",
          fontFamily: "Aldrich",
        }}
      >
        Song author: {author}
      </h1>
    </div>
  );
};

export default SongContent;
