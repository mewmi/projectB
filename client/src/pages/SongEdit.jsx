import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { songEdit, songLoadSingle } from "../services/songs";
import SongForm from "../components/SongForm";

const SongEdit = () => {
  const [song, setSong] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSongEdit = () => {
    songEdit(id, song).then(() => navigate(`/songs/${id}`));
  };

  useEffect(() => {
    songLoadSingle(id).then((data) => setSong(data.song));
  }, [id]);
  return (
    <div>
      <h1>Edit Song</h1>
      {song && (
        <SongForm
          song={song}
          onSongChange={setSong}
          onSongSubmit={handleSongEdit}
        />
      )}{" "}
    </div>
  );
};

export default SongEdit;
