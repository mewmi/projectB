import React from "react";

const YoutubeEmbed = ({ embedId }) => (
  <div className="videoResponsive">
    <iframe
      width="500"
      height="281"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{
        justifyContent: "center",
        marginTop: "20px",
      }}
    />
  </div>
);

export default YoutubeEmbed;
