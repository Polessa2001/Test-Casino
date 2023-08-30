import React, { useEffect, useState } from 'react';
import gamesData from '../../data/gamesData';
import CircularButton from '../../components/buttons/CircularButton';
import './Categories.css';

const Category = (props) => {
  const [mixedGames, setMixedGames] = useState([]);

  useEffect(() => {
    mixGames();
  }, []);

  const mixGames = () => {
    const mixed = [...gamesData];
    for (let i = mixed.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mixed[i], mixed[j]] = [mixed[j], mixed[i]];
    }
    setMixedGames(mixed);
  };

  return (
    <div className="category">
      <div className="category-header">
        <p className="category-name">{props.name}</p>
        <div className="category-switcher">
          <p style={{ fontSize: '0.75rem', paddingRight: '0.5rem' }}>View more</p>
          <CircularButton action="&lt;" color="var(--bars-color)" />
          <CircularButton action="&gt;" color="var(--primary-color)" />
        </div>
      </div>
      <div className="scrollBar">
        {mixedGames.map((game, index) => (
          <div key={index}>
            <img className="gameCard" src={game.img} alt="gameimg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
