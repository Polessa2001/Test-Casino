import React from 'react';
import Filters from '../filters/Filters';
import Categories from '../categories/Categories';
import Promos from '../promos/Promos';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="mainContent">
      <Filters />
      <Categories />
      <Promos />
    </div>
  );
}

export default MainContent;
