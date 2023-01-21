import React from "react";

const SongForm = ({ song, onSongChange, onSongSubmit }) => {
  const handleSongFormSubmission = (event) => {
    event.preventDefault();
    onSongSubmit();
  };
  return (
    <div className="float-child-two">
      <form onSubmit={handleSongFormSubmission} className="float-child-one">
        <label htmlFor="name" className="inputForm">
          Song Title
        </label>
        <input
          className="inputForm"
          type="text"
          name="name"
          id="name"
          onChange={(event) =>
            onSongChange({
              ...song,
              name: event.target.value,
            })
          }
          value={song.name}
        />
        <label htmlFor="link" className="inputForm">
          Song link
        </label>
        <input
          className="inputForm"
          type="text"
          name="link"
          id="link"
          onChange={(event) =>
            onSongChange({
              ...song,
              link: event.target.value,
            })
          }
          value={song.link}
        />
        <label htmlFor="author" className="inputForm">
          Artist
        </label>
        <input
          className="inputForm"
          type="text"
          name="author"
          id="author"
          onChange={(event) =>
            onSongChange({
              ...song,
              author: event.target.value,
            })
          }
          value={song.author}
        />
        <div id="button-id">
          <button
            className="button-86"
            /*  style={{
              maxHeight: "12px",
              maxWidth: "60px",
              textAlign: "right",
            }} */
          >
            Submit Song
          </button>
        </div>
      </form>
    </div>
  );
};

export default SongForm;
