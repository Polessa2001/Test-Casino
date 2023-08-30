import React from 'react'
import cardsData from '../../data/cardsData';
const Category = (props) => {
  const cards = cardsData;
  return (
    <div className="category">
      <div>
        <p>{props.name}</p>
        <div>
          <p>View more</p>
          <a href ="#">&lt;</a>
          <a href ="#">&gt;</a>
        </div>
      </div>
      <div className="scrollBar">

      </div>
    </div>
  )
}

export default Category
