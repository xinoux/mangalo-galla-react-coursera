import React from 'react';

export default function CategoryItem({ type, image,  }) {
  return (
    <div className="sampleitems">

      <img src={image} alt={type} id={`img_${type}`} />
      <figcaption for={`img_${type}`} id={`lbl_${type}`}>
        {type}
      </figcaption>
    </div>
  );
}
