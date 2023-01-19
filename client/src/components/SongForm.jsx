import React from "react";

const SongForm = ({ song, onSongChange, onSongSubmit }) => {
  const handleSongFormSubmission = (event) => {
    event.preventDefault();
    onSongSubmit();
  };
  return (
    <form onSubmit={handleSongFormSubmission}>
      <label htmlFor="name">Song Title</label>
      <input
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
      <label htmlFor="link">Song link</label>
      <input
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
      <label htmlFor="author">Post author</label>
      <input
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

      <button>Submit Song</button>
    </form>
  );
};

export default SongForm;
