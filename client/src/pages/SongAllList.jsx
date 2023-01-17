import React from "react";
import { songLoadAll } from "../services/songs";
import { useEffect, useState } from "react";
import SongList from "../components/SongList";

const SongAllList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    songLoadAll().then((data) => setSongs(data.songs));
  }, []);
  const handleSortButton = () => {
    const newArray = songs.sort((a, b) => {
      return a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : a.name.toLowerCase() < b.name.toLowerCase()
        ? -1
        : 0;
    });
    console.log(newArray);
    setSongs([...newArray]);
  };

  return (
    <div>
      <button onClick={handleSortButton}>Sort by name</button>
      <SongList songs={songs} />
    </div>
  );
};

export default SongAllList;
