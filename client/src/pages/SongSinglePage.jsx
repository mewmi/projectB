import React from "react";
import { useState, useEffect } from "react";
import SongContent from "../components/SongContent";
import { useParams, Link, useNavigate } from "react-router-dom";
import { songDelete, songLoadSingle } from "../services/songs";

const SongSinglePage = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);

  const navigate = useNavigate();
  const handleSongDeleteSubmit = (event) => {
    event.preventDefault();
    songDelete(id).then(() => navigate("/songs"));
  };

  useEffect(() => {
    songLoadSingle(id).then((data) => setSong(data.song));
  }, [id]);

  return (
    <div>
      {" "}
      {song && <SongContent song={song} />}
      <div>
        <Link to={`/quotes/${id}/edit`}>Edit Song</Link>
        <form onSubmit={handleSongDeleteSubmit}></form>
        <button>Delete Song</button>
      </div>
    </div>
  );
};

export default SongSinglePage;
