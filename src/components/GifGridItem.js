import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title.substring(0, 10)}...</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default GifGridItem;
