import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title.substring(0, 10)}...</p>
    </div>
  );
};

export default GifGridItem;
