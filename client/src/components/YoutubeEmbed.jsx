import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div className="videoResponsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{
        width: "auto",
        /*  minWidth: "500px" */ /* , */ height: "auto",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    />
  </div>
);

export default YoutubeEmbed;
