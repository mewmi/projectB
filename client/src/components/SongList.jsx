import React from "react";
import { Link } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

const SongList = ({ songs }) => {
  return (
    <div>
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
    <div>
      <YoutubeEmbed embedId={embedLink} />
      <Link to={`/songs/${eachSong._id}`}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
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
