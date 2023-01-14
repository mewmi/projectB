import React from "react";
import { Link } from "react-router-dom";

const SongList = ({ songs }) => {
  return (
    <div>
      {songs.map((eachSong) => {
        return (
          <div key={eachSong._id}>
            <Link to={`/songs/${eachSong._id}`}>
              <h3>{eachSong.name}</h3>
              <h1>{eachSong.image}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SongList;
