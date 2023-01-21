import React from "react";
import { songLoadAll } from "../services/songs";
import { useEffect, useState } from "react";
import SongList from "../components/SongList";

const SongAllList = () => {
  const [songs, setSongs] = useState([]);
  const [isSortedByName, setIsSortedByName] = useState(true);

  useEffect(() => {
    songLoadAll().then((data) => setSongs(data.songs));
  }, []);

  const handleSortButton = () => {
    isSortedByName ? sortByName() : sortByDate();
    setIsSortedByName(!isSortedByName);
  };
  const sortByName = () => {
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
  const sortByDate = () => {
    const newArray = songs.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    console.log(newArray);
    setSongs([...newArray]);
  };

  return (
    <div class="float-child-two">
      <button
        onClick={handleSortButton}
        className="button-86"
        style={{
          position: "absolute",
          margin: "20px",
          maxHeight: "10px",
          maxWidth: "50px",
        }}
      >
        Sort by {isSortedByName ? "name" : "date"}
      </button>
      <SongList songs={songs} />
    </div>
  );
};

export default SongAllList;
