import React from "react";
import { songLoadAll } from "../services/songs";
import { useEffect, useState } from "react";
import SongList from "../components/SongList";

const SongAllList = () => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    songLoadAll().then((data) => setSongs(data.songs));
  });

  return (
    <div>
      <SongList songs={songs} />
    </div>
  );
};

export default SongAllList;
