import React from "react";
import { Link } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

const SongList = ({ songs }) => {
  return (
    <div className="songList">
      {songs.map((eachSong) => {
        return <SongListItem key={eachSong._id} eachSong={eachSong} />;
      })}
    </div>
  );
};

const SongListItem = ({ eachSong }) => {
  const regex = /.*v=/gm;
  const embedLink = eachSong.link.replace(regex, "");
  return (
    <div className="songList">
      <YoutubeEmbed embedId={embedLink} />
      <Link className="songList" to={`/songs/${eachSong._id}`}>
        <h3
          style={{
            fontSize: "20px",
            margin: "10px",
            fontFamily: "Aldrich",
            color: "black",
            textDecoration: "none",
          }}
        >
          {eachSong.name}
        </h3>
        {/*   <h1>{eachSong.image}</h1> */}
      </Link>
    </div>
  );
};

export default SongList;
