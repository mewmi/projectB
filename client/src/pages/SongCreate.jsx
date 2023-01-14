import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { songAdd } from "../services/songs";
import SongForm from "../components/SongForm";

const SongCreate = () => {
  const [song, setSong] = useState({
    name: "",
    link: "",
    image: "",
    author: "",
  });
  const navigate = useNavigate();

  const handleSongCreation = () => {
    songAdd(song).then((data) => {
      const id = data.song._id;
      navigate(`/songs/${id}`);
    });
  };
  return (
    <div>
      <SongForm
        song={song}
        onSongChange={setSong}
        onSongSubmit={handleSongCreation}
      />
    </div>
  );
};

export default SongCreate;
