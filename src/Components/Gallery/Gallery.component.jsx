import React from "react";

import GalleryItem from "../GalleryItem/GalleryItem.component";

import "./Gallery.styles.scss";

const Gallery = ({ countries }) => {
  const countriesToShow = countries.map((country) => (
    <GalleryItem key={country.alpha3Code} country={country} />
  ));

  return <div className='gallery'>{countriesToShow}</div>;
};

export default Gallery;
