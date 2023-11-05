import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { songAdd } from "../services/songs";
import SongForm from "../components/SongForm";
import { useAuthContext } from "../context/authentication";

const SongCreate = () => {
  const { authToken } = useAuthContext();
  const [song, setSong] = useState({
    name: "",
    link: "",
    image: "",
    author: "",
  });
  const navigate = useNavigate();

  const handleSongCreation = () => {
    songAdd(song, authToken).then((data) => {
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
