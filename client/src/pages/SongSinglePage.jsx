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
    <div className="float-child-two">
      {" "}
      {song && <SongContent song={song} />}
      <div className="button-group">
        <button
          className="button-87"
          style={{ maxHeight: "10px", alignItems: "center" }}
        >
          <Link
            to={`/songs/${id}/edit`}
            style={{
              fontSize: "20px",
              margin: "10px",
              fontFamily: "Aldrich",
              color: "black",
              textDecoration: "none",
            }}
          >
            Edit Song
          </Link>
        </button>
        <form onSubmit={handleSongDeleteSubmit}>
          <button className="button-86" id="delete-button">
            Delete Song
          </button>
        </form>
      </div>
    </div>
  );
};

export default SongSinglePage;
