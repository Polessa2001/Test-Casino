import React from 'react';
import './Filters.css';
import filtersData from '../../data/filtersData';

const Filters = () => {
  const filters = filtersData;
  return (
    <div className="filters">
      {filters.map((filter, id) => (
        <div className = "filter" key={filter.id}>
          <img src={filter.img} alt={filter.filter} />
          <p>{filter.filter}</p>
        </div>
      ))}
    </div>
  );
}

export default Filters;
