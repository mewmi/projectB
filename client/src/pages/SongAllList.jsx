import React from "react";
import { songLoadAll } from "../services/songs";
import { useEffect, useState } from "react";
import SongList from "../components/SongList";

const SongAllList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    songLoadAll().then((data) => setSongs(data.songs));
  }, []);

  /*
  Runs every time component is rendered
  useEffect(() => {
    
  })

  // First time component is rendered
  useEffect(() => {

  }, []);

  // First time comp is rendered and everythime modalIsOpen changes
  useEffect(() => {

  }, [modalIsOpen])
  */

  return (
    <div>
      <SongList songs={songs} />
    </div>
  );
};

export default SongAllList;
