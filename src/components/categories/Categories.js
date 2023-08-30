import React from 'react'
import Category from './Category';
import './Categories.css';
const Categories = () => {
  return (
    <div className="categories">
      <Category name ="Popular" />
      <Category name ="New Games" />
      <Category name ="MegaWays" />
    </div>
  )
}

export default Categories
