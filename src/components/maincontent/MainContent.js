import React from 'react';
import Filters from '../filters/Filters';
import Categories from '../categories/Categories';
import Announcments from '../announcments/Announcments';
import './MainContent.css';

const MainContent = () => {
  return (
    <div>
      <Filters />
      <Categories />
      <Announcments />
    </div>
  );
}

export default MainContent;
